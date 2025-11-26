from importlib import metadata

__all__ = ["version"]


def version() -> str:
    try:
        return metadata.version("layout-optimizer-lib")
    except metadata.PackageNotFoundError:
        return ""
