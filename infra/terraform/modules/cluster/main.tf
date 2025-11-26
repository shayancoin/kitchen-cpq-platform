// Placeholder for Kubernetes cluster resources.

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

variable "public_subnet_ids" {
  description = "Public subnet IDs for load balancers and endpoints"
  type        = list(string)
  
  validation {
    condition     = length(var.public_subnet_ids) > 0
    error_message = "public_subnet_ids must not be empty."
  }
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for cluster worker nodes"
  type        = list(string)
  
  validation {
    condition     = length(var.private_subnet_ids) > 0
    error_message = "private_subnet_ids must not be empty."
  }
}

output "cluster_name" {
  description = "EKS cluster name"
  value       = null # Replace with actual resource name
}
