export const config = {
  // -------------------- Information --------------------
  name: 'Test experiment',
  localisation: 'en-US',

  // -------------------- Manipulations --------------------
  manipulations: {},

  // -------------------- Stimuli --------------------
  stimuli: {},

  // -------------------- Keybindings --------------------
  keybindings: {
    'keyboard': {
      next: 'j',
      previous: 'f',
      submit: ' ',
      alt: 'g',
    },
    'spectrometer': {
      next: '3',
      previous: '2',
      submit: '4',
      alt: '1',
    },
  },

  // -------------------- Style constants --------------------
  style: {},

  // -------------------- Other properties --------------------
  // Timing configuration, times specified in milliseconds
  timings: {
    run: 1000,
  },

  // Seed for RNG must be in [0, 1)
  seed: 0.1234,
};
