# tilla-tech
Extra questions
We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

1.What are some edge cases you would take care of before shipping this to production?
Answer: Its better to have a separate env for staging to do Unit testing, Load testing and the devloper has to make sure of all prod and dev environments before pushing them and ensure the code quality is good and clean

2.How would you scale this to handle high amounts of traffic?
Answer:Using load balancers, there are a lot of types of loadbalancers e.g, Round robin, weighted loadbalancer, which is to handle high amout of traffic,
If we are using Nodejs as backend framework we can have NGINx and PM2 for scaling the applications applevel and for extending Cpu Cores

What's important for you to work well in a fully remote team?
Answer: Team Coordination and suppot