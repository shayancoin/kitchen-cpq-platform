// Placeholder for Postgres/Redis/Kafka database resources.
// Security: Databases must reside in private subnets with restricted SGs.
// Dependencies: Requires VPC ID, private subnet IDs from network module.

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

variable "vpc_id" {
  description = "VPC ID from network module"
  type        = string

  validation {
    condition     = length(var.vpc_id) > 0
    error_message = "vpc_id must not be empty."
  }
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for database placement"
  type        = list(string)

  validation {
    condition     = length(var.private_subnet_ids) > 0
    error_message = "private_subnet_ids must not be empty."
  }
}
