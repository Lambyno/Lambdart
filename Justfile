path := "."
res := "300x300"

compress:
    mogrify -resize {{res}} -path {{path}}/compressed/ *.png