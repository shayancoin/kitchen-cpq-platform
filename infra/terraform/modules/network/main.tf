// Placeholder for VPC/network resources.

output "vpc_id" {
  description = "VPC ID"
  value       = null # Replace with aws_vpc.main.id
}

output "private_subnet_ids" {
  description = "Private subnet IDs for cluster and databases"
  value       = [] # Replace with aws_subnet.private[*].id
}

output "public_subnet_ids" {
  description = "Public subnet IDs for NAT/IGW"
  value       = [] # Replace with aws_subnet.public[*].id
}

