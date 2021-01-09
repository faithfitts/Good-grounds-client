curl  --include --request POST "https://secret-mesa-20835.herokuapp.com/sign-in"/
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

  echo
