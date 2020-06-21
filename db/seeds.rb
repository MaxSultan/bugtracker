STATUS = ['re-opened', 'assigned', 'resolved', 'closed']
Bug.delete_all
# 10.times do 
#     Bug.create(
#         name:Faker::Hacker.noun, 
#         status:STATUS.sample, 
#         assignedTo:Faker::Name.name,
#         deadline: Faker::Date.forward(days: 23)
#         )
# end 

puts 'seeded'