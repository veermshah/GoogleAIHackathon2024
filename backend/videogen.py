import requests

url = "https://api.d-id.com/clips"

payload = {
    "script": {
        "type": "audio",
        "subtitles": "false",
        "provider": {
            "type": "microsoft",
            "voice_id": "en-US-JennyNeural"
        },
        "ssml": "false"
    },
    "config": {
        "logo": {
            "position": [0, 500],
            "url": "string"
        },
        "result_format": "mp4"
    },
    "presenter_config": { "crop": { "type": "rectangle" } },
    "background": {
        "color": "false",
        "source_url": "https://path.to.image/"
    },
    "presenter_id": "amy-Aq6OmGZnMt",
    "driver_id": "a5PgMbeGQE",
    "created_by": "dr.gemini",
    "user_data": "string",
    "name": "string",
    "webhook": "https://host.domain.tld/to/webhook",
    "result_url": "https://path.to.directory/",
    "raw_result_url": "https://path.to.directory/",
    "persist": True
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Basic ZG1WbGNtMXBZMnRsZVVCbmJXRnBiQzVqYjIwOllLY1VNRHB3czZRRUY0aDBaMzlxN1lLY1VNRHB3czZRRUY0aDBaMzlxNw=="
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)