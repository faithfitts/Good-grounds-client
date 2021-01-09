curl --include --request DELETE "https://secret-mesa-20835.herokuapp.com/sign-out" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
