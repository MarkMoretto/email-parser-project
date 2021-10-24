# syntax=docker/dockerfile:1
FROM python:3.7-slim

WORKDIR /app

# COPY /requirements/core.txt requirements/core.txt
# COPY /requirements/testing.txt requirements/testing.txt
COPY . /app

RUN pip install -r /app/requirements/core.txt

EXPOSE 8000:8000

COPY . .

ENTRYPOINT [ "python" ]
CMD ["-m", "src"]
