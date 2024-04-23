# import the playht SDK
from pyht import Client, TTSOptions, Format

def text_to_speech(text):
    # Initialize PlayHT API with your credentials
    client = Client("ttgcBOemeVV0EH8P8KCcWtbo8kA3", "5133e7a78e4c47c7bc1f2defec625aac")

    # configure your stream
    options = TTSOptions(
        # this voice id can be one of our prebuilt voices or your own voice clone id, refer to the`listVoices()` method for a list of supported voices.
        voice="s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",

        # you can pass any value between 8000 and 48000, 24000 is default
        sample_rate=44_100,
    
        # the generated audio encoding, supports 'raw' | 'mp3' | 'wav' | 'ogg' | 'flac' | 'mulaw'
        format=Format.FORMAT_MP3,

        # playback rate of generated speech
        speed=1,
    )

    with open("backend/output.mp3", "wb") as output_file:  # Specify desired filename and format
        for chunk in client.tts(text=text, voice_engine="PlayHT2.0-turbo", options=options):
            output_file.write(chunk)
            print("playing...")

    print("done")
    exit()

text_to_speech("Jeremiah, how have you been? ... Have you been following your treatment plan?.")

import requests

url = "https://api.play.ht/api/v2/voices"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)