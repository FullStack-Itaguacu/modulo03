# Build `image`
```docker build -t meu-postgresql .```

# Run the ´Container´ with the created `image` 
```docker run -d --name meu-novo-banco -p 5432:5432 meu-postgresql```