terraform {
  required_version = ">= 1.6.0"
}

provider "aws" {
  region = "us-east-1"
}

module "network" {
  source = "./modules/network"
  providers = {
    aws = aws
  }
}

module "cluster" {
  source = "./modules/cluster"
  providers = {
    aws = aws
  }

  vpc_id             = module.network.vpc_id
  public_subnet_ids  = module.network.public_subnet_ids
  private_subnet_ids = module.network.private_subnet_ids

  depends_on = [module.network]
}

module "databases" {
  source = "./modules/databases"

  providers = {
    aws = aws
  }

  vpc_id             = module.network.vpc_id
  private_subnet_ids = module.network.private_subnet_ids

  depends_on = [module.network]
}
