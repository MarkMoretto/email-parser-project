
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


class Settings(CommonSettings, ServerSettings):
    pass


class DevSettings(CommonSettings, DevCommonSettings, DevServerSettings):
    pass



prod_settings = Settings()
dev_settings = DevSettings()

