# syntax=docker/dockerfile:1
FROM python:3.7-slim

WORKDIR /usr/src/app

# COPY /requirements/core.txt requirements/core.txt
# COPY /requirements/testing.txt requirements/testing.txt
COPY . /usr/src/app

RUN pip install -r /usr/src/app/requirements/core.txt

EXPOSE 8000:8000

COPY . .

# ENTRYPOINT [ "python" ]
# CMD ["-m", "src"]
