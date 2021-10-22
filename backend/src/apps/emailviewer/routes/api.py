

from fastapi import APIRouter
# from apps.groundspeed.routes import person
# from apps.groundspeed.routes import generic
from ..routes import person, generic

router = APIRouter()

router.include_router(person.router, tags=["people"], prefix="/people")

# Generic router
# Usage might be:
#   http://localhost:27017/codes/all
#   http://localhost:27017/allergies/1
router.include_router(generic.router, prefix="")
# router.include_router(generic.router, tags=["codes","allergies", "policyholders"], prefix="")
# router.include_router(generic.router, tags=["allergies"], prefix="/allergies")
# router.include_router(generic.router, tags=["policyholder"], prefix="/policyholder")
