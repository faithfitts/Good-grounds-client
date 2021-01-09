curl  --include --request PATCH "https://secret-mesa-20835.herokuapp.com/change-password" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
    --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
