// Placeholder for Kubernetes cluster resources.

variable "vpc_id" {
  description = "VPC ID from network module"
  type        = string
}

variable "public_subnet_ids" {
  description = "Public subnet IDs for load balancers and endpoints"
  type        = list(string)
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for cluster worker nodes"
  type        = list(string)
}

output "cluster_name" {
  description = "EKS cluster name"
  value       = null # Replace with actual resource name
}
