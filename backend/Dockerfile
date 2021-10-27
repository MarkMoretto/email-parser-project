# syntax=docker/dockerfile:1
FROM python:3.7-slim-stretch

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app
# WORKDIR /app


COPY /requirements /usr/src/app/requirements
# COPY /requirements/core.txt /usr/src/app/backend/requirements/core.txt
# COPY /requirements/testing.txt requirements/testing.txt
# COPY . /usr/src/app/backend

RUN pip install -r /usr/src/app/requirements/core.txt

# EXPOSE 8000:8000

COPY . .

# ENTRYPOINT [ "python" ]
CMD ["python", "-m", "src"]
