/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite. This suite is all about the RSS
    * feeds definitions.
    */

    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has an URL defined
         * and that the URL is not empty.
         */

         it('url is defined and not empty', function() {
           for (let i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBe('');
           };
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined and not empty', function() {
           for (let i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name).not.toBe('');
           };
         });
    });
    /* This is a test suite that tests menu functionality*/
    describe('The menu', function(){
      /* This is a test that ensures the menu element is
       * hidden by default.
       */
        it('is hidden by default', function(){
          let body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
      });

       /* This is a test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        it('changes visibility when clicked', function(){
            let body = document.querySelector('body');
          let menuIcon = document.querySelector('.menu-icon-link');
          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);
          menuIcon.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* This test suite tests functionality of entries */
    describe('Initial Entries', function(){
      /* This is a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
        beforeEach(function(done){
          loadFeed(0, done);
        });
        it('are not empty', function(){
            let entry = document.querySelector('.feed .entry');
            expect(entry).not.toBe(null);
            });
        });

    /* This test suite tests new feed selection functionality */
    describe('New Feed Selection', function(){
      /* This is a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
        let feedContainer = document.querySelector('.feed');
        let content1;
        let content2;

        beforeEach(function(done){
          loadFeed(0, function(){
            content1 = document.querySelector('.entry').innerText;
            loadFeed(1, function(){
            let content2 = document.querySelector('.entry').innerText;
            done();
            });
          });
        });

        it('content is changing', function(){
          expect(content1).not.toBe(content2);
        });
    });

}());
