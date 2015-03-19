User.delete_all
Rant.delete_all

25.times do
  user = User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "1234",
    avatar: Faker::Avatar.image
  )

  Rant.create!(
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph,
    user: user
  )
end
