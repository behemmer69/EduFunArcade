/*
 * ============================================================================
 * NYQUIST STUDIO: EXTERNAL MUSIC CATALOG (tracks.js)
 * Copyright (c) 2026 Barry Hemmerdinger. All Rights Reserved.
 * ============================================================================
 * HOW TO ADD OR EDIT TRACKS:
 * 1. Place this file (`tracks.js`) in the same folder as your HTML file on GitHub.
 * 2. To add a procedural synth track: copy any object below and adjust its
 *    `synth` parameters and scoring targets (`f95Hz`, `dynamicSensitivity`, `highFreqWeight`).
 * 3. To use a real MP3/WAV file hosted in your GitHub repo:
 *    Add an entry with `audioUrl: "your-file.mp3"`, optional `startSec: 0`,
 *    and `f95Hz: "auto"`.
 * ============================================================================
 */

window.NYQUIST_TRACK_LIBRARY = [
  {
    id: 'sub_pad',
    tag: 'LOW FREQ • WIDE DYNAMICS',
    name: 'Velvet Sub-Bass & Rhodes Pad',
    hint: 'Warm sub-bass and soft, decaying electric piano chords. Almost all acoustic energy sits below 2.6 kHz, but the delicate quiet chord tails need high bit depth to avoid quantization hiss.',
    f95Hz: 2500,
    dynamicSensitivity: 1.35,
    highFreqWeight: 0.65,
    synth: {
      barLengthSec: 2.5,
      bassNotes: [73.42, 87.31, 98.00, 110.00, 65.41, 82.41],
      chordNotes: [293.66, 349.23, 392.00, 440.00, 261.63],
      bassLevel: 0.46,
      bassDecay: 1.1,
      chordLevel: 0.24,
      chordDecay: 2.1,
      chordHarmonics: [1.0, 1.2, 1.5, 3.0, 5.0],
      chordWeights:   [1.0, 0.7, 0.5, 0.25, 0.12],
      fmBellLevel: 0.0,
      hiHatLevel: 0.0,
      drive: 1.0
    }
  },
  {
    id: 'bright_synth',
    tag: 'HIGH FREQ • COMPRESSED LOUDNESS',
    name: 'Neon Cymbal & FM Bell Rush',
    hint: 'Fast, shimmering FM bells, high arpeggios, and crisp hi-hat transients reaching 13.5 kHz at a constant, compressed volume. The loud signal masks low bit-depth stair-stepping, but demands a high sampling rate!',
    f95Hz: 13500,
    dynamicSensitivity: 0.58,
    highFreqWeight: 1.45,
    synth: {
      stepRateHz: 8,
      bassNotes: [146.84, 174.62, 196.00, 220.00, 130.82, 164.82],
      leadNotes: [587.33, 698.46, 783.99, 880.00, 1046.50, 1174.66, 1318.51],
      bassLevel: 0.28,
      fmBellLevel: 0.32,
      fmModRatio: 3.5,
      fmModIndex: 1.8,
      fmHighHarmonics: [6.0, 9.5],
      hiHatLevel: 0.14,
      hiHatRateHz: 4,
      hiHatDecay: 14.0,
      hiHatFreqs: [7800, 10400, 12900],
      drive: 1.55
    }
  },
  {
    id: 'lofi_groove',
    tag: 'MIDRANGE • BIT-SAVER GOLDMINE',
    name: 'Dusty Suitcase Funk Groove',
    hint: 'Punchy midrange bass and warm drum groove rolling off naturally around 4.8 kHz with moderate dynamics. Neither slider needs to be maxed—prime territory for banking a massive Bit-Saver Bonus!',
    f95Hz: 4800,
    dynamicSensitivity: 0.85,
    highFreqWeight: 0.90,
    synth: {
      stepRateHz: 4,
      bassNotes: [110.13, 130.96, 147.00, 165.00, 98.11, 123.61],
      chordNotes: [293.66, 349.23, 392.00, 440.00, 261.63],
      kickLevel: 0.42,
      kickDecay: 7.5,
      chordLevel: 0.34,
      chordDecay: 3.8,
      chordHarmonics: [1.0, 2.0, 4.0, 8.0, 11.0],
      chordWeights:   [1.0, 0.7, 0.45, 0.28, 0.14],
      drive: 1.25
    }
  },
  {
    id: 'crescendo_swell',
    tag: 'FULL SPECTRUM • EXTREME DYNAMICS',
    name: 'Whisper-to-Thunder Cinematic Swell',
    hint: 'Opens with a bare, whisper-quiet harp melody before erupting into a bright brass and cymbal finale up to 9.5 kHz. Balancing both Nyquist treble and quiet-tail bit depth is a true mastering test.',
    f95Hz: 9500,
    dynamicSensitivity: 1.22,
    highFreqWeight: 1.20,
    synth: {
      stepRateHz: 3,
      bassNotes: [73.42, 87.31, 98.00, 110.00, 65.41, 82.41],
      leadNotes: [293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 659.25],
      swellStart: 0.06,
      swellPower: 2.1,
      brassEntrySec: 2.5,
      brassHarmonics: [1.0, 6.0, 11.0, 15.0],
      brassWeights:   [1.0, 0.6, 0.35, 0.22],
      drive: 1.0
    }
  },
  {
    id: 'chiptune_arp',
    tag: 'BRIGHT ARPEGGIO • STEADY VOLUME',
    name: 'Arcade Pulse & Crystal Lead',
    hint: 'Crisp upper-register chiptune lead with harmonic overtones up to 8.2 kHz and steady amplitude. Moderate bit depth works fine, but watch the Nyquist line!',
    f95Hz: 8200,
    dynamicSensitivity: 0.65,
    highFreqWeight: 1.25,
    synth: {
      stepRateHz: 10,
      bassNotes: [130.81, 146.83, 164.81, 196.00],
      leadNotes: [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98],
      bassLevel: 0.30,
      fmBellLevel: 0.36,
      fmModRatio: 2.0,
      fmModIndex: 1.2,
      fmHighHarmonics: [3.0, 5.0],
      hiHatLevel: 0.08,
      hiHatRateHz: 5,
      hiHatDecay: 18.0,
      hiHatFreqs: [6400, 8100],
      drive: 1.4
    }
  },
  {
    id: 'sonar_abyss',
    tag: 'ULTRA-LOW FREQ • DELICATE TAILS',
    name: 'Deep Trench Sonar & Warm Organ',
    hint: 'Sub-bass drone and resonant sonar pings that never exceed 1.9 kHz, followed by long, whisper-quiet reverberant tails. Move your Sampling Rate slider down and pour your budget into Bits per Sample!',
    f95Hz: 1900,
    dynamicSensitivity: 1.45,
    highFreqWeight: 0.55,
    synth: {
      barLengthSec: 2.0,
      bassNotes: [55.00, 65.41, 73.42, 82.41],
      chordNotes: [220.00, 261.63, 293.66, 329.63],
      bassLevel: 0.48,
      bassDecay: 1.4,
      chordLevel: 0.28,
      chordDecay: 2.6,
      chordHarmonics: [1.0, 1.5, 2.0, 3.0, 4.0],
      chordWeights:   [1.0, 0.6, 0.4, 0.2, 0.1],
      drive: 1.0
    }
  }
];
