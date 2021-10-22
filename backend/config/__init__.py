
__all__ = [
    "dev_settings",
    "prod_settings",
]

import os
from pydantic import BaseSettings


class CommonSettings(BaseSettings):
    APP_NAME: str = "Email Viewer"
    DEBUG_MODE: bool = False
    

class DevCommonSettings(BaseSettings):
    DEBUG_MODE: bool = True


class ServerSettings(BaseSettings):
    HOST: str = "0.0.0.0"
    PORT: int = 8000


class DevServerSettings(BaseSettings):
    HOST: str = "127.0.0.1"
    PORT: int = 8000

class DatabaseSettings(BaseSettings):
    # DB_URL: str = os.environ["MONGO_CONN_STRING"]
    # DB_NAME: str = "emaildb"
    pass


class DevDatabaseSettings(BaseSettings):
    # DB_HOST: str = "127.0.0.1"
    # DB_PORT: int = 27017
    # DB_URL: str = "mongodb://root:example@127.0.0.1:27017"
    # DB_NAME: str = "emaildb"
    pass


class Settings(CommonSettings, ServerSettings, DatabaseSettings):
    pass


class DevSettings(CommonSettings, DevCommonSettings, DevServerSettings, DevDatabaseSettings):
    pass



prod_settings = Settings()
dev_settings = DevSettings()

