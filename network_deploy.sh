aws cloudformation $1 --stack-name $2 --template-body file://network.yaml  --parameters file://network-params.json --capabilities "CAPABILITY_IAM" "CAPABILITY_NAMED_IAM" --region=us-east-1