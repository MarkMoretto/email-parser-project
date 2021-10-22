import uvicorn


uvicorn.run(r"src.server.main:email_app", host="127.0.0.1", port=8000, reload=True)
