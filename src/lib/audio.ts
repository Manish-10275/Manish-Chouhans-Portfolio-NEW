class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;
  private droneOscs: { osc: OscillatorNode; gain: GainNode }[] = [];

  constructor() {
    // Audio Context is initialized on first user interaction due to browser policies
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(force?: boolean) {
    this.isEnabled = force !== undefined ? force : !this.isEnabled;
    this.initCtx();
    
    if (this.isEnabled) {
      this.startAmbientDrone();
    } else {
      this.stopAmbientDrone();
    }
    
    return this.isEnabled;
  }

  public getEnabled() {
    return this.isEnabled;
  }

  public playHover() {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'triangle';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    
    osc.start(now);
    osc.stop(now + 0.15);
  }

  public playClick() {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Snappy high pulse
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1200, now);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 0.08);
    gain1.gain.setValueAtTime(0.04, now);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    
    // Low pop
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(150, now);
    osc2.frequency.exponentialRampToValueAtTime(80, now + 0.1);
    gain2.gain.setValueAtTime(0.06, now);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

    osc1.start(now);
    osc1.stop(now + 0.08);
    osc2.start(now);
    osc2.stop(now + 0.1);
  }

  public playChime() {
    if (!this.isEnabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Arpeggio)
    
    notes.forEach((freq, index) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx!.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      
      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.03, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.4);
      
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.42);
    });
  }

  private startAmbientDrone() {
    this.initCtx();
    if (!this.ctx || this.droneOscs.length > 0) return;

    const now = this.ctx.currentTime;

    // Harmonic low frequency oscillators for a sci-fi cockpit drone
    const freqs = [65.41, 98.00, 130.81]; // C2, G2, C3
    
    freqs.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      
      // Connect LFO to filter/amplitude for natural sweep
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      
      osc.connect(gain);
      gain.connect(this.ctx!.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      
      // Detune slightly for chorus effect
      osc.detune.setValueAtTime((i - 1) * 8, now);
      
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.1 + i * 0.05, now); // slow sweeps
      lfoGain.gain.setValueAtTime(0.004, now);
      
      gain.gain.setValueAtTime(0.008, now);
      
      lfo.start(now);
      osc.start(now);
      
      this.droneOscs.push({ osc, gain });
    });
  }

  private stopAmbientDrone() {
    this.droneOscs.forEach(({ osc }) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    this.droneOscs = [];
  }
}

// Export singleton
export const audio = new SoundManager();
export default audio;
