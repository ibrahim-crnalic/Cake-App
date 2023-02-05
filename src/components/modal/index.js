import React from "react";
import Close from "../../assets/icons/close.png";

function Modal(props) {
  return (
    <div className="modalWrapper">
      <div className="modalContent">
        <img
          src={Close}
          onClick={() => {
            props.setOpen(false);
          }}
          alt="closeIcon"
        />
        <h1>{props.title}</h1>
        <h2>Ingredients</h2>
        <ul>
          {data[props?.id]?.ingredients.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <h2>How to make</h2>
        <p>{data[props?.id]?.howToMake}</p>
      </div>
    </div>
  );
}
export default Modal;
const data = [
  {
    ingredients: [
      "2 c. blueberries",
      "2 tbsp. granulated sugar",
      "2 tsp. lemon juice",
      "FOR THE CRUST",
      "9 graham crackers, finely crushed (about 1¼ c.)",
      "6 tbsp. melted butter",
      "¼ c. granulated sugar",
      "FOR THE CHEESECAKE",
      "4 (8-oz.) blocks cream cheese, softened",
      "1 c. granulated sugar",
      "2 large eggs",
      "1 tsp. pure vanilla extract",
      "¼ c. sour cream",
      "2 tbsp. all-purpose flour",
      "¼ tsp. kosher salt",
      "1 c. blueberry puree",
      "FOR TOPPING",
      "Whipped cream",
      "Blueberries",
    ],
    howToMake: `
    Preheat oven to 325°. In a small food processor, blend blueberries until no large chunks remain.
    In a small saucepan over medium heat, add blueberry puree, sugar, and lemon juice. Bring to a boil, then reduce heat and let simmer until slightly reduced, stirring occasionally, 10 minutes. Let cool to room temperature.
    Make crust: In a large bowl, mix together graham cracker crumbs, melted butter, and sugar, until mixture resembles wet sand. Press into bottom and up sides of an 8" or 9" springform pan.
    Make cheesecake: In a large bowl using a hand mixer (or in the bowl of a stand mixer), beat cream cheese and sugar until no lumps remain. Add eggs, one at a time, then stir in vanilla and sour cream. Add flour and salt and beat until just combined. Fold in blueberry puree.
    Pour mixture over crust. Wrap bottom of pan in aluminum foil and place in a large roasting pan. Pour in enough boiling water to come halfway up the baking pan.
    Bake until center of cheesecake only slightly jiggles, about 1 hour 30 minutes. Turn off heat, prop open oven door, and let cheesecake cool in oven, 1 hour.
    Remove foil and refrigerate cheesecake until completely chilled, at least 5 hours and up to overnight.
    When ready to serve, top cheesecake with whipped cream and blueberries.
`,
  },
  {
    ingredients: [
      "1 3/4 cup plain flour",
      "2 cups sugar",
      "3/4 cup good quality cocoa powder",
      "2 tsp baking soda",
      "1 tsp baking powder",
      "1 tsp salt",
      "1 cup buttermilk, shaken",
      "1/2 cup vegetable oil",
      "2 eggs, at room temperature",
      "1 tsp vanilla",
      "1 cup freshly brewed hot coffee",
      "FOR THE CHOCOLATE MASCARPONE FROSTING",
      "250g mascarpone",
      "2/3 cup cocoa powder",
      "2/3 cup icing sugar",
      "1 1/4 cup double cream",
      "FOR DECORATION",
      "150g blueberries",
      "150g redcurrants",
      "150g raspberries",
      "icing sugar to decorate",
    ],
    howToMake: `Preheat the oven to 180ºC. Butter two 20cm (8 inches) round cake pans (make sure cake pans are at least 5cm/2 inches tall). Butter and flour the pans, then line with parchment paper. Sift the flour, sugar, cocoa, baking soda, baking powder and salt into the bowl of an electric mixer fitted with a paddle attachment and mix on low speed until combined. In another bowl, combine the buttermilk, oil, eggs and vanilla. With the mixer on low speed, slowly add the wet ingredients. Make the coffee and pour it into the cake batter. Stir just to combine, scraping the bottom of the bowl with a rubber spatula.
    Divide the batter into the two cake pans and bake for 35-40 minutes, until a toothpick comes out clean. Cool in the pans for 30 minutes, then turn them out onto a cooling rack and cool completely, removing the parchment paper.
    While the cakes are baking, prepare the frosting. Whip the mascarpone, cocoa powder and icing sugar until creamy. Add the double cream and whip until you obtain the desired consistency.
    Place one cake layer, flat side up, on a cake stand. With a knife or offset spatula, spread the top with frosting. Add one third of the washed berries. Place the second cake layer on top, rounded side up, and spread the frosting evenly on the top and sides. Place in the fridge to set for one hour.
    Before serving the cake, decorate the cake with the remaining berries and sprinkle with icing sugar.`,
  },
  {
    ingredients: [
      "BATTER",
      "5 eggs",
      "1 cup unsalted butter",
      "1 cup whole milk",
      "3 cup sifted cake flour",
      ,
      "1 tablespoon baking powder",
      "½ teaspoon kosher salt",
      "2 cup sugar",
      "1 tablespoon pure vanilla extract",
      "FROSTING",
      "1 fresh coconut, husk and peel removed and grated or finely shredded (3 to 4 cups)",
      "3 egg whites",
      "2 cup sugar",
      "¼ teaspoon cream of tartar",
      "¾ cup water",
      "¼ teaspoon kosher salt",
      "2 teaspoon pure vanilla extract",
    ],

    howToMake: ` Prepare Batter Let eggs, butter, and milk stand at room temperature for 30 minutes. Preheat oven to 350 degrees F. In a medium bowl combine cake flour, baking powder, and kosher salt; spoon flour mixture onto a square of waxed paper. "It makes adding flour to the bowl much neater," says Scott. Butter three 8x8x2-inch square or three 8x1-1/2-inch round cake pans; line bottoms with waxed paper. Butter waxed paper and lightly flour; set aside.
    In large mixing bowl beat butter with an electric mixer on medium to high speed for 30 seconds. Add 2 cups sugar and 1 Tbsp. vanilla; beat 3 to 4 minutes on medium speed until well combined. Add eggs, one at a time, beating well after each addition. Using waxed paper as funnel for flour, alternately add flour mixture and milk to butter mixture, beating on low after each addition until just combined. "It should be satin smooth," says Scott. Divide batter among the three pans.
    Bake 20 to 25 minutes or until tops spring back when lightly touched. Cool layers in pans on wire racks for 10 minutes. Remove the cake layers from pans; peel off waxed paper and discard. Cool on wire racks.
    To drain coconut water, with an ice pick or nut pick make holes in two of the eyes with a pressing, twisting motion. If eyes are especially tough, tap top of pick with hammer. Pour coconut water into measuring cup. "Some folks use this water as a replacement for part of the milk in the cake layer recipe. I enjoy drinking the coconut water over ice."
    To crack coconut shell, hold coconut in one hand and with hammer tap-somewhat assertively-rotating the coconut as you strike. "The goal is not to smash it open, but to systematically tap and loosen the shell, so tap up and down and all around," says Scott. "Rotate and tap a bit more aggressively as you go. After 2-3 minutes of this you will hear a change in the sound of the tapping and then a cracking sound, which indicates the shell has been split." Separate coconut into pieces, tapping with hammer as necessary.
    To remove coconut meat, on towel-protected counter slowly work thin-blade knife between coconut and shell. With vegetable peeler remove brown skin from coconut. Using smallest holes on box grater, shred coconut.
    To make sugar syrup: Let egg whites stand at room temperature 30 minutes. In medium saucepan combine 2 cups sugar, cream of tartar, and water. Cook and stir over low heat until sugar is dissolved. Cover, bring to boiling; boil 2 minutes. Remove cover; attach candy thermometer to pan and cook, without stirring until 240 degrees F (5 to 10 minutes).
    Meanwhile, in large mixing bowl beat egg whites with electric mixer on medium to high until frothy. Add 1/4 tsp. salt and beat just until stiff peaks begin to form.
    With the mixer running on low, slowly pour in hot syrup. Beat in the 2 tsp. vanilla. Increase speed to medium-high; beat until light and fluffy and a dollop of whites lifted off the beater holds its shape (3 to 4 minutes). 
    On a serving plate or stand arrange first cake layer on 2-inch-wide strips of waxed paper. "Once you're done frosting," Scott says, "remove the waxed paper and your plate is pristine." Spread top of each layer with frosting, then sprinkle generously with shredded coconut. If frosting starts to thicken, set over bowl of hot water. When cake is completely frosted heap with additional coconut, pressing gently with your fingers to bed the coconut.
    With a broad knife or spatula gently lift base of cake and slide waxed paper free. Repeat on all sides of cake`,
  },
  {
    ingredients: [
      ,
      "FROSTED CRANBERRIES",
      "2 c fresh cranberries",
      "1 1/2 c sugar",
      "water",
      "CRANBERRY FILLING",
      "1 12oz bag fresh cranberries",
      "1 1/2 c. white sugar",
      "1 1/4 c. water, divided",
      "2 tbsp. cornstarch",
      "WHITE CAKE WITH CRANBERRIES",
      "1 white cake mix",
      "1 package (4 oz) white chocolate pudding mix (dry)",
      "1/2 c. sugar",
      "3/4 c. oil",
      "3/4 c. water",
      "4 eggs",
      "1 (8 oz) container sour cream",
      "WHITE CHOCOLATE BUTTERCREAM",
      "1 c unsalted butter (2 sticks)",
      "1 bag (2 lb) powdered sugar (about 7.5 c.)",
      "1 4 oz. packet white chocolate pudding (dry)",
      "1.5 c heavy cream",
      "1/4 tsp almond extract",
    ],
    howToMake: `Before making the cake it's a good idea to make the filling! You want it to be well chilled when it goes on the cake. 
  Combine the cranberries, 3/4 c. of the water, and white sugar in a medium saucepan.  Cook on medium heat until cranberries start to burst, stirring well. 
  Once cranberries start to burst, use the back of a spoon to crush the cranberries. Continue to stir until the mixture is bubbling and all cranberries are cooked down. 
  In a separate bowl mix the remaining 1/2 c. water with the cornstarch. Whisk until there are no clumps.
  Add this cornstarch mixture to the saucepan. Whisk in well, and continue to cook on medium heat until mixture has thickened. 
  Once it's thickened, remove from heat. Let come to room temperature then transfer to large glass jar or airtight tupperware container.
  Chill until ready to frost cake.
  To make frosted sparkling cranberries, rinse fresh cranberries in water, straining in a colander. 
  Prepare a large baking sheet by covering it with white sugar. Remove wet cranberries from colander and toss in sugar.
  Shake baking sheet horizontally to level off the cranberries (so all are in an even layer and none are stacked on top of one another).
  Chill in fridge for 1 hour to set.
  Preheat oven to 350 degrees. Prepare cake pans with baking spray and parchment paper in the bottom of the pans. (You can use 2 layer pans, 3 layer pans, or a bundt pan.)
  In a large bowl, mix all cake ingredients except eggs and sour cream, with a large spoon. Then mix in one egg at a time. Then add sour cream.  Once mixed well, pour even amounts into your layer pans. 
  (And if you're making a layer cake, I've done the measurements for you!
  - 3 layer cake: 1.9 cups of batter per pan
  - 2 layer cake: 2.8 cups of batter per pan
  Here's how to bake depending on how many layers you're making:
  - 2 layers (8/9 inch layer pans): 30-35 minutes at 350 degrees
  - 3 layers (8/9 inch layer pans): 23-25 minutes at 340 degrees
  - bundt cake: 50 - 55 minutes at 350 degrees
  Once cake is lightly golden brown and springs back to the touch, it is done. Remove from oven and let rest in pan until cool. Turn out onto baking sheet with parchment paper and chill. I like to freeze each layer of cake to keep it clean from crumbs while frosting.
  Beat butter in a stand mixer with paddle attachment until softened and smooth.
  In a separate bowl, whisk white chocolate pudding mix with heavy cream. Whisk really well to get all the clumps out. Once mixture is smooth, set aside.
  Add 1 c. at a time of powdered sugar to the butter, while mixing on low speed. After adding a cup of powdered sugar, alternate by adding pudding mixture in. Keep alternating until both are added. 
  Beat in mixer until smooth and incorporated. If the mixture is too stiff for your liking, you can add a little more cream. If it's a little too thin, you can add a little more powdered sugar.
  A thicker buttercream will make a layer cake more stable. However if you're making a bundt cake you might want it thinner to drizzle over the top. Once it has the consistency you'd like, add the almond extra and mix until incorporated.
  If your cakes have risen high with domes, remove cake domes from cakes with a large serrated knife.
  On a cake stand or large plate, spread a spoonful of the frosting in a flat circle. Place the first layer of cake onto this. This frosting will keep the cake from sliding.
  Place 1/4 of the buttercream into a large piping bag (or Ziploc bag with the end cut off).
  Once the first layer is on the plate, pipe a 1 inch border around the edge to hold in the cranberry filling.
  Once border is piped, fill inside the frosting border with cranberry filling and spread evenly. Then add next cake layer on top. The border of frosting will keep the cranberry filling from squeezing out, and keep your cake stable. 
  For a 3 layer cake, repeat buttercream border and cranberry filling on top of your 2nd layer. (If you only have a 2 layer cake, just put cranberry filling in between the 2 layers).
  Add 3rd layer to top and frost thinly. Then thinly frost the edges and smooth them out with an offset spatula.
  Once cake has a smooth crumb coat, freeze again for at least 20 minutes.
  When cake is very cold, remove from freezer and frost with remaining buttercream. If you want to make it fluffy looking like my frosting, use a knife with back and forth strokes to get the fluffy appearance.
  Top the cake with sparkling cranberries and add some around the edge, if desired
`,
  },
  {
    ingredients: [
      ,
      "CAKE",
      "¾ cup (80g) cocoa powder, sifted",
      "¾ cup (160ml) boiling water",
      "2 cups (200g) almond or hazelnut meal",
      "1 tsp baking powder",
      "4 large eggs, at room temperature",
      "1 cup (220g) caster sugar",
      "200ml neutral flavoured oil (canola, vegetable, light olive oil)",
      "2 tsp Queen Natural Vanilla Extract",
      "GANACHE",
      "½ cup (60g) cocoa powder, sifted",
      "¼ cup Queen Pure Maple Syrup",
      "2 tbsp refined coconut oil, melted",
      "1 tsp Queen Natural Vanilla Extract",
      "1 tbsp dairy free milk (optional)",
    ],
    howToMake: `               Method - Cake :
  Preheat oven to 150°C (fan-forced). Grease and line a 20cm round cake tin with baking paper.
  Place the cocoa in a medium bowl and gradually stir in the boiling water until smooth. Set aside to cool.
  Sift together almond meal and baking powder. Set aside.
  In the bowl of a stand mixer fitted with the whisk attachment or using a hand mixer. Beat together eggs, sugar, oil and Vanilla Extract on high speed for 5 minutes or until thick and pale. Add the cocoa mixture and mix just combined. Add the almond meal and baking powder and fold through until just combined.
  Pour mixture into prepared tin and bake for 60-70 minutes or until an inserted skewer comes out with a few wet crumbs. Cool completely in tin.
  Method - Ganache : 
  Combine sifted cocoa, Maple Syrup, coconut oil and Vanilla Extract in a bowl. Mix until smooth. Add dairy free milk if any additional liquid is needed. Spread onto cooled cake and enjoy!
  Notes: For a shiny and smooth frosting it is best to ice your cake immediately after making the ganache. If ganache
  is allowed to sit too long it will start to clump together from the cocoa and will be difficult to spread.`,
  },
  {
    ingredients: [
      "2 Cups fine blanched almond flour",
      "⅓ Cup coconut flour",
      "Heaping Cup Confectioners Swerve",
      "1 ½ teaspoon baking powder",
      "3 eggs",
      "Just under 1 cup almond milk",
      "1 stick + 2 ½ tbsps. butter",
      "2 teaspoon vanilla extract",
      "Pinch of salt",
      "VANILLA FROSTING:",
      "2 sticks + 2 ⅓ tbsps. butter",
      "1 cup cream cheese",
      "1 cup confectioners Swerve",
    ],
    howToMake: `MAKING THE CAKE BATTER:
  First, preheat the oven to 320 degrees Fahrenheit (160°C), line two 8-inch springform pans with parchment paper, and set them aside.  
  Then take out a large bowl, add almond flour, coconut flour, baking powder, and salt, and give everything a little mix.
  Next, in a mixing bowl, beat the butter with a hand or stand mixer until it turns into a creamy consistency. Then add the confectioners swerve - or monk fruit - mix it with the butter until it becomes fluffy, and add the eggs one at a time.
  After that, add the almond milk and vanilla extract and mix them in to combine. 
  A four way split picture showing the process of making cake batter.
  Then pour the dry ingredient mixture into the mixing bowl of wet ingredients and mix until a smooth batter forms.
  BAKING THE CAKE:
  Now that you have a cake batter, grease the two lined cake pans with a little butter and pour the batter evenly into each one.
  Then bake them for about 30-35 minutes until the cake top turns golden brown, and a toothpick comes out clean when inserted into the center.
  Next, allow the cakes to cool, and while they're cooling, you can make the frosting.
  To springform pans on a pink counter filled with vanilla cake batter.
  FROSTING THE CAKE:
  For the frosting, add the butter and cream cheese to a mixing bowl. Then using either a hand mixer or stand mixer with the paddle attachment, beat the butter and cream cheese together until combined.
  Then slowly blend in the confectioners swerve and vanilla extract, and beat on high until everything is well combined and a smooth and creamy frosting forms. 
  A white bowl and a pink counter filled with cream cheese frosting. 
  Once your cake has cooled completely, remove it from the springform pan and flip it upside down onto a plate. 
  Then spread some of the frosting on the bottom layer, put the other cake on top, and coat the rest of the sides and top of the cake with the rest of the frosting.
  After your cake is frosted, slice it into 14 slices, and enjoy!
  A vanilla cake covered in vanilla frosting on a cake stand and a white counter.
  HOW TO STORE KETO VANILLA CAKE:
  So, as I just mentioned, this recipe will make about 14 slices of cake. 
  And although that may sound like a lot, if you serve it to a group of people, it will be gone in a hurry. 
  But if you happen to save a few slices, this vanilla cake is incredible leftover. 
  Just put your cake in an airtight container, and you can refrigerate it for up to a week. Then, when you want to enjoy a slice, take it out of the fridge, let it reach room temperature, and dig in!
  And if you want to keep the cake for longer, here are a few different ways you can freeze it for up 4-6 months.
  A vanilla cake with vanilla frosting on a cake stand. A cake spatula is pulling a slice of cake from it.
  WRAPPING IT ALL UP:
  Well, that is the most delicious keto vanilla cake that you can make!
  The sweet vanilla flavor and soft, moist texture will have everyone coming back for more after they get a taste.
  If you serve this as a keto birthday cake or just for a regular dessert, everyone is sure to love it and won't have a clue that it is low carb keto.`,
  },
  {
    ingredients: [
      "CLASSIC PAVLOVA BASE",
      "221 g egg whites, at room temp about 7 large eggs - 225 mL",
      "350 g caster sugar or granulated sugar, pulsed to make it finer",
      "1 tbsp cornstarch tightly packed tbsp, 8 -10 g",
      "2 tsp white vinegar 10 mL or ¾ tsp cream of tartar",
      "1 tsp grated lemon zest optional (from a dry lemon)",
      "TO SERVE THE PAVLOVA",
      "1 cup whipping cream 35% fat",
      "3 tbsp confectioner’s sugar",
      "2 tsp vanilla extract",
      "2 kiwi fruits peeled and sliced",
      "1 cup halved strawberries or more",
      "1 cup other types of fruit blueberries, raspberries, cubed mango, redcurrants etc.",
      "2 - 4 tbsp of passion fruit pulp/syrup or lemon curd optional",
    ],
    howToMake: `Pavlova Base:
  Make sure all the equipment is clean and dry (mixer bowl, whisk, two spatulas, sugar bowl, bowls to separate egg yolks and whites etc.).
  Preheat oven to 300°F / 150°C. Cut a piece of parchment paper that's big enough to line a baking tray. Draw a circle that's 8 in / 20 cm in diameter on the underside of the parchment paper. Line the baking tray with the parchment paper (with the drawn circle on the underside). Set aside until needed.
  Carefully break an egg, and strain the egg white into a small clean bowl, taking care not to break the egg yolk. Once you've successfully separated the egg white, transfer this into a mixer bowl that is on a weighing scale. Repeat with more eggs, until you have 221 g of egg whites (give or take 5 grams). If you get any yolk into the egg white, you must discard the contaminated egg white and start again with another egg.
  Do not throw away the egg yolks, since you can make other recipes with them (see end of the post for some ideas). Store egg yolks in an air-tight container, with a layer of water to coat them on top.
  Once the egg whites are measured and in the mixer bowl, whisk the egg whites on speed 4 (on a 10 speed mixer) until it reaches soft peak stage (i.e. when you lift the whisk, soft peaks should be formed in the egg whites). This may take about 10 minutes.
  When the egg whites are at soft peak stage, lower the speed to 3, and add the sugar, 1 - 2 tbsp at a time. Make sure each addition of sugar is dissolved before adding the next. I wait about 30 seconds between each addition. Also scrape down the sides of the bowl at least once, while adding the sugar. Do not rush this process. This can take about 10 -15 minutes.
  Once all the sugar is added, increase the speed to 4, and whisk the egg whites just until the sugar has completely dissolved, and the egg whites are thick and glossy, and hold their shape well.
  Here's how to check if the sugar has dissolved - take a small amount of the meringue mix between your fingers and rub it. If it feels grainy or has any granules, then there's undissolved sugar. If you don't feel any granules or grittiness, then the sugar is completely dissolved. I also like to make sure that I don’t see any undissolved sugar in a few other places in the meringue (under the whisk, in the bowl etc).
  Whisking egg whites until the sugar completely dissolves can take between 15 - 30 minutes, depending on the sugar you use. Do not rush this, and check on the meringue periodically to make sure you won’t over-whisk it. Use the spatula to scrape down the sides of the bowl a few times as well.
  While the egg whites are being whisked, place the cornstarch and vinegar in a small bowl and mix to combine. The cornstarch mix will be a thick, paste like slurry. (please note cornstarch forms an ooblek that is a solid when sitting, but a paste when moving around).
  Once the sugar is dissolved, and the meringue is glossy and thick, immediately add the cornstarch and vinegar slurry. Increase the speed to about 5 - 6 and let the cornstarch slurry mix into the egg whites for about 30 - 45 seconds. Then stop whisking and remove the bowl from the mixer.
  Using a clean spatula, scoop the meringue in the bowl out on to the parchment paper with the drawn circle. Pile the meringue in the middle of the drawn circle. Be careful not to scoop out the top edge of meringue in the mixer bowl to prevent any undissolved sugar getting into the mixture (see picture in the post).
  Using an offset spatula, spread the meringue mix to fill the drawn circle on the parchment paper. Make sure the meringue mix is evenly tall.
  Once you have shaped the pavlova (see pictures in the post), use an offset spatula or palette knife to create furrows along the sides of the pavlova, going from bottom to top. Smoothen the edges to get rid of meringue points (that can burn easily). The pavlova should have soft, rounded edges. Create some swirls on the middle of the meringue on top as well.
  Transfer the cake into the preheated oven, and immediately reduce the temperature to 225°F / 110°C.
  Bake the pavlova for 90 minutes. Do not open the oven door during this time.
  When the 90 minutes are up, turn off the oven and allow the pavlova to cool down in the oven overnight (or up to 6 hours, until completely cooled down).
  Transfer the pavlova into an air-tight container and store in a cool dry place (free of draft), until ready to serve. Do not store in the fridge or freezer.
  To serve the pavlova:
  Place the chilled whipping cream in a chilled bowl. Whisk the cream on medium speed. (Do not over-whisk the cream as it can become grainy. If you whisk the cream on high, you risk over-beating it, and the cream will deflate faster, making the pavlova runny.)
  While whisking the cream, add the confectioner’s sugar and vanilla into it. Mix until you have stiff peaks, but the cream is still smooth.
  Spread the cream on top of the pavlova, and top it with the prepared fruits. Drizzle/spread the passion fruit of lemon curd over the top as well (if using).
  Serve immediately.`,
  },
  {
    ingredients: [
      "FOR THE CAKE",
      "200g unsalted butter, softened",
      "200g caster sugar",
      "30g pistachio paste (see here for homemade version)",
      "4 eggs",
      "100g raw shelled pistachios",
      "200g self raising flour",
      "MERINGUE BUTTERCREAM ICING AND ASSEMBLY:",
      "270g caster sugar",
      "67ml water",
      "135g egg whites (3-4 egg whites approx. (but do measure specifically), use leftovers from making the lemon curd)",
      "330g unsalted butter, softened",
      "1/2 tsp vanilla extract",
      "130g (approx.) Jordan’s Super Easy Lemon Curd",
      "50g blanched pistachios",
    ],
    howToMake: `Method: 
  Preheat oven to 160 degrees Celsius and grease and line two 20cm round baking tins. 
  Place the pistachios on a small tray and lightly toast in the oven for 5 minutes. Remove, and allow to cool a little, then blitz into fine crumbs (similar to the consistency of almond meal) using a food processor. 
  In the bowl of a stand mixer, place the butter, sugar and pistachio paste. Beat on medium speed until well combined and fluffy. 
  Gently whisk the eggs in a jug, and add to the butter mixture with the mixer running on a low/medium speed. Add the ground pistachios and continue to beat on medium speed until combined. 
  Measure out the self raising flour into a separate bowl and briefly whisk to remove any lumps. Add the flour to the batter, and mix on the lowest speed. Finnish mixing by hand to avoid over working the batter. 
  Evenly transfer the cake batter between the two prepared tins, and bake for 30 minutes or until cooked through and golden in colour. 
  Leave the cakes too cool in their tins for a few minutes, then remove from the tins and allow to cool completely on a wire rack. 
  To make the icing, place the water and sugar in a small saucepan over high heat and allow to come to a rapid boil. Using a candy thermometer keep an eye on the temperature of the sugar syrup - it will be ready once it reaches 121 degrees Celsius. 
  Place the egg whites in the bowl of a stand mixer, and gently whisk until foamy (start this once the sugar syrup is at around 100 degrees Celsius). 
  Once the sugar syrup has reached 121 degrees Celsius, remove from the heat, and with the mixer running on low pour it over the whisked egg whites (avoiding the whisk itself as much as possible). 
  Increase the speed of the mixer to medium, and continue to whisk until the meringue has cooled right down - this will take at least 5-10 minutes. 
  Cut the butter into cubes, and add a cube or two at a time with the mixer still running. Allow each cube to incorporate into the mixture before adding more. Continue to beat until the meringue buttercream is completely smooth. Briefly beat in the vanilla extract. 
  Place one of the cooled cakes on to a plate or cake stand (or a cake turntable if you have one) top side up. Spread a thin layer of the buttercream over the cake, then using a piping bag pipe a rim of icing around the edge - this will contain the lemon curd and create a more even surface for the second cake layer to sit on. Pipe a second rim inside the first if you think the cake needs more height around the edges to make it even.  
  Spoon the lemon curd into the centre of the cake, pushing to the edge of the buttercream rim you have piped. Pipe over some more of the buttercream over the top of the lemon curd and gently smooth it out with a spatula. 
  Trim the top of the second cake if necessary (so it will sit as flat as possible), and place top side down, over the curd and buttercream layer. 
  Cover the top of the cake with more meringue buttercream, then spread down the sides and around the entirety of the cake. Try to make the buttercream as smooth and even as possible, using a spatula or palette knife. It doesn’t need to be perfect, as you will now cover the icing with some pistachios. 
  Briefly blitz the blanched pistachios in a food processor so you get large crumbs (alternately you could chop them up with a knife). Cover the entire cake in the pistachio crumbs, sprinkling them over the top and pressing them into the sides of the cake. 
  Place the cake into the fridge for about 30-60 minutes, to allow the icing the firm up - this will allow you to get some nice clean slices when you cut the cake. Any excess meringue buttercream icing can be stored for one week in an airtight container in the fridge. 
  Store cake in the fridge, will keep for about 5 days. 
  Serves 8-10.`,
  },
  {
    ingredients: [
      "FOR THE CAKE:",
      "1 ½ cup gluten-free oat flour",
      "¾ cup unsweetened cocoa powder",
      "1 tsp baking powder",
      "1 tsp baking soda",
      "½ tsp vanilla extract",
      "¼ tsp sea salt",
      "1 container SoDelicious Unsweetened Plain Yogurt (5.3 oz) (or another plain vegan yogurt)",
      "¾ cup unsweetened chocolate almond milk",
      "2 tsp apple cider vinegar",
      "1 ½ cup of medjool dates, pitted and chopped",
      "1 cup warm water",
      "½ cup raw pecans, chopped",
      "½ cup shredded unsweetened coconut",
      "FOR FROSTING:",
      "1 cup raw cashews, soaked in water for at least 2 hours or overnight, then drained and gently patted dry",
      "1 cup coconut milk, from a can",
      "1 tbsp lemon juice",
      "2 rounded tbsp coconut oil, solid",
      "2 tbsp cocoa powder",
      "¼ cup maple syrup",
      "Optional: chopped pecans and chocolate chips for topping",
    ],
    howToMake: `FOR THE CAKE:
    Preheat oven to 350 degrees F. Spray two round 8×1.5 inch cake pans with cooking spray and set aside
    In a large mixing bowl, whisk together flour, cocoa, baking powder, baking soda, and sea salt. In a food processor, blend dates and water until pureed and smooth. Place date paste in a bowl and add yogurt, vanilla, milk, and apple cider vinegar. Add wet ingredients to try ingredients and mix until just combined. Fold in shredded coconut and pecans and mix until evenly distribute.
    Divide cake batter between the prepared cake pans and bake for 25 minutes on the middle rack.
    Remove cake from oven and allow both parts to fully cool on a wire rack before flipping them out of the pans and frosting them.
    FOR THE FROSTING:
    While the cake is cooking, blend together all frosting ingredients in a food processor. The mixture will not be thick like frosting at first, so pour it into a bowl or container and place in the fridge for about an hour to thicken. 
    Once cake frosting has thickened and cake is fully cooled, begin frosting cake one layer at a time and then stack on top of one another. Frost the entire outside of the stacked cake and decorate with extra pecans and chocolate chips if desired.`,
  },
];
