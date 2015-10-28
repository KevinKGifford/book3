---
layout: layout.hbs
---

# Hackathon - Business Locations

You are approached by a business developer to get advice on where to build a
new store in Phoenix, AZ. There are currently six candidates. Use the Yelp
dataset and come up with your own scoring scheme to identify the best location
to recommend.

## Report

[Read the Report](report.html)

## Business Types
As a team, choose one of the following business types to work on:

- A new full-service daycare center
- A new full-service car wash
- A new 24-hours gym
- A new 24-hours diner
- A new swimming pool
- A new organic food store
- A new sushi buffet

## Scoring Method

For this hackathon, you will use a scoring method that is based on a series of
20 Yes/No questions that can be applied to each candidate location. The candidate
location that has the most number of Yes's is the most viable location.

Each Yes/No question generally should take on the form of

  _Does the location have X nearby?_

where X is a feature that you think would be useful for the business to be viable.

Two examples of such questions are:
1. Does the location have _at least one McDonald's within one mile_?
1. Does the location have _at least ten businesses with 100 or more reviews within one mile_?

## Coding

Implement scoring functions and visualize how these candidate locations are
scored. The skeleton code is provided for you in [report.html](report.html).

## Grading

Each person must implement at least two questions to receive credits for this
hackathon.

## Submissions

### Business Type

Our team chose to analyze candidate locations for (fill in the business type).

### Contributors

The team members who contributed to this hackathon are:

* [William Farmer](http://github.com/willzfarmer)
* [Kevin Gifford](http://github.com/kevinkgifford)
* [Parker Illig](http://github.com/pail4944)
* [Robert Kendl](http://github.com/DomoYeti)
* [Andrew Krodinger](http://github.com/drewdinger)
* [John Raesly](http://github.com/jraesly)


### 20 Questions (Facility name: Professional Day Care)

Our team came up with the following relevant questions:

1. Are there any elementary schools within 2 km radius? contributed by ([Parker Illig](http://github.com/pail4944))

  (Importance: Ability of parent to drop children at daycare and at school easily)

2. Are there any preschools within a 2 km radius? contributed by ([Parker Illig](http://github.com/pail4944))

  (Importance: Ability of parent to drop children at daycare and at preschool easily)

3. (*) Are there any zoo's in a 5 km radius? contributed by ([Parker Illig](http://github.com/pail4944))

  (Importance: Indicative of good neighborhood, easily accessible entertainment for children)

4. (*) Are there any Adult entertainment stores nearby? contributed by ([Parker Illig](http://github.com/pail4944))

  (Importance: Indicative of bad neighborhood for raising children/family)

5. (*) Is there a Starbucks within 2 km? contributed by ([Kevin Gifford](http://github.com/kevinkgifford))

  (Importance: Ease and convenience for parent to get coffee when dropping off children at day care)

6. (*) Is there a doctors office within 2 km? contributed by ([Kevin Gifford](http://github.com/kevinkgifford))

  (Importance: Ease of access to medical services for parents and for the day care facility)

7. Is there a hospital within 5 km? contributed by ([Kevin Gifford](http://github.com/kevinkgifford))

  (Importance: Ease of access to medical services for parents and for the day care facility)

8. Is there a dentist office within 5 km? contributed by ([Kevin Gifford](http://github.com/kevinkgifford))

  (Importance: Ease of access to dental services for parents and for the day care facility)

9. Are their any dog walker's within 5 km? contributed by ([Kevin Gifford](http://github.com/kevinkgifford))

  (Importance: Ease of access to dog care services for parents when droppin children at day care facility)

10. Are there any other daycare's nearby? contributed by ([William Farmer](http://github.com/willzfarmer))

  (Importance: Competition evaluation; ensure not an over-served market)

11. (*) Are there any diners nearby? (indicator of bad neighborhood?)? contributed by ([William Farmer](http://github.com/willzfarmer))

  (Importance: Indicative of bad neighborhood for raising children/family)

12. Are there any tattoo parlors nearby? (as above)? contributed by ([William Farmer](http://github.com/willzfarmer))

  (Importance: Indicative of bad neighborhood for raising children/family)

13. Are there any banks nearby? contributed by ([William Farmer](http://github.com/willzfarmer))

  (Importance: Ease of access to banking and financial services for parents)

14. (*) Any dive bars nearby? contributed by ([William Farmer](http://github.com/willzfarmer))

  (Importance: Indicative of bad neighborhood for raising children/family)

15. (*) Is there a rehabilitation center nearby? contributed by ([John Raesly](http://github.com/jraesly))

  (Importance: Indicative of bad neighborhood for raising children/family)

16. (*) Are there health stores nearby? contributed by ([John Raesly](http://github.com/jraesly))

  (Importance: Ease of access to organic grocery items and services for parents and for the day care facility)

17. Is there children's clothing nearby? contributed by ([John Raesly](http://github.com/jraesly))

  (Importance: Ease of access to children clothing items for parents and for the day care facility)

18. (*) Are there any museums nearby? contributed by ([Robert Kendl](http://github.com/DomoYeti))

  (Importance: Indicative of good neighborhood, easily accessible entertainment for children)

19. Are there any cannabis clinics nearby? contributed by ([Robert Kendl](http://github.com/DomoYeti))

  (Importance: Indicative of bad neighborhood for raising children/family)

20. (*) Are there any urgent care facilities nearby? contributed by ([Robert Kendl](http://github.com/DomoYeti))

  (Importance: Ease of access to emergency medical services for parents and for the day care facility)


### Conclusion

Our team collectively has implemented 10 scoring functions. Based on
the scores, our team recommends locations 1, 2 & 3 (from west to east),
because all three locations received 7 out of 10 possible points.
