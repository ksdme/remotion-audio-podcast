import json
import math
import os
import numpy as np
from tqdm import tqdm
from scipy.io import wavfile


# Configuration
source_file_name = os.path.join(os.getcwd(), 'resources/audio.wav')
target_file_name = f'{source_file_name}.json'
segments_count = 40

# Read the file
with open(source_file_name, 'rb') as source_file:
    sample_rate, amplitudes = wavfile.read(source_file)

# Calculate constants
segment_width = math.ceil(len(amplitudes) / segments_count)
segment_duration = (len(amplitudes) / sample_rate) / segments_count
segment_amplitudes = list()

# Aggregate the amplitudes
for segment in tqdm(range(segments_count)):
    segment_start = segment * segment_width
    segment_ends = segment_start + segment_width
    amplitude_slice = amplitudes[segment_start:segment_ends]

    amplitude_slice_mean = np.mean(amplitude_slice, axis=1)
    amplitude_slice_absolute_mean = np.absolute(amplitude_slice_mean)

    segment_amplitude = amplitude_slice_absolute_mean.mean()
    segment_amplitudes.append(segment_amplitude)

# Normalize the values
max_amplitude = max(segment_amplitudes)
max_attainable = 100

for index in range(len(segment_amplitudes)):
    factor = segment_amplitudes[index] / max_amplitude
    segment_amplitudes[index] = factor * max_attainable

# Save the results
with open(target_file_name, 'w') as target_file:
    json.dump({
        'duration': segment_duration,
        'amplitudes': segment_amplitudes,
    }, target_file)
