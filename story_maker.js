function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var animal = document.getElementById('animal').value;
    var emotion = document.getElementById('emotion').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var occupation = document.getElementById('occupation').value;
    var past = document.getElementById('past').value;
    var plural = document.getElementById('plural').value;
    var vehicle = document.getElementById('vehicle').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = name1 + " the " + noun1;


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "There once was a " + noun1 + " whose name was " + name1 +
                     ". One day, " + name1 + " decided to " + verb1 + ". " +
                     name1 + " did it enough to feel " + emotion + ". " + number1 +
                     " minutes later, " + name1 + " said goodbye to " + name2
                     + " the pet " + animal + " and went to the store. " + name1 +
                     " found a brand new " + noun2 + " for only " + number2 + " dollars. "
                     + name1 + " absolutely needed to buy it, but did not have quite "
                     + "enough money. " + name1 + " thought and thought for"
                     + " ways to get money. <br> <br>";

    var paragraph2 = name1 + " decided that the best way to get money is by getting"
                     + " a part-time job as a " + occupation + ". In this job, "
                     + name1 + " was required to "+ verb2 + " and " + verb3
                     + " at the same time. It was " + adjective1 + ". After " +
                     number3 + " weeks, " + name1 + " finally had " + number2 +
                     " dollars: enough to buy the " + noun2 + ". <br> <br>";

    var paragraph3 = name1 + " was very excited to get the " + noun2 + ". However, "
                     + name3 + ", the worker at the store, said that they were sold"
                     + " out of what " + name1 + " wanted. As a result, " + name1 +
                     " got mad and spent every last penny on a bunch of " + plural +
                     " instead. Right after " + name1 + " made the purchase, a " +
                     vehicle + " appeared outside. " + name3 + " said, \"Would you"
                     + " look at that! Another " + noun2 + "! You still have enough"
                     + " money, right?\" " + name1 + " " + past + ". <br> <img src=\"cart.png\">";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)

    document.getElementById('title').innerHTML = title;
    document.getElementById('story').innerHTML = paragraph1 + paragraph2 + paragraph3;

}
