// Placeholder for Postgres/Redis/Kafka database resources.
// Security: Databases must reside in private subnets with restricted SGs.
// Dependencies: Requires VPC ID, private subnet IDs from network module.

variable "vpc_id" {
  description = "VPC ID from network module"
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet IDs for database placement"
  type        = list(string)
}
