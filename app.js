// // var leftSide = document.querySelector('.section');

// // setTimeout(() => {
// //   leftSide.classList.add('active');
// // }, 1000);

// document.querySelectorAll('.planet').forEach(planet => {
//     planet.addEventListener('click', () => {
//       console.log('Planet clicked:', planet.classList[0]);

//       planet.children[0].classList.add('glow');

//       leftSide.classList.remove('active');
//       console.log('Removed active class from leftSide');

//       const currentPlanet = planet.classList[0];

//       const sections = document.querySelectorAll(`.section > div`);
//       sections.forEach(s => {
//         s.classList.remove('selected');
//       });
      

//       document.querySelectorAll('.planet').forEach(p => {

        // if (p.classList[0] !== planet.classList[0]) {
        //   //PLANETS NOT CLICKED
        //   const planetClass = p.classList[0];

        //   // Reset animation by setting it to 'none' and then re-adding it
        //   p.style.animation = 'none';
        //   p.children[0].classList.remove('glow');
        //   // Force reflow to restart the animation
        //   void p.offsetWidth; // This line forces a reflow
        //   p.style.animation = `orbit-out-${planetClass} 2s 1 linear`;

        // } else {
        //   //PLANET THAT WAS CLICKED
        //   //leftSide.classList.remove('hidden');
        //   setTimeout(() => {
        //     const activeSection = document.querySelector(`.${currentPlanet}-section`);
        //     activeSection.classList.add('selected');
        //     leftSide.classList.add('active');
        //     console.log('Added active class to leftSide');

        //   }, 1000);
        // }
//       });
//     });
//   });

var leftSide = document.querySelector('.section');
var activeSection = document.querySelector('.selected');
setTimeout(() => {
  leftSide.classList.add('active');
}, 1000);

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => {

      planet.children[0].classList.add('glow');

      leftSide.classList.remove('active'); // This will trigger the transition
      setTimeout(() => {
        const sections = document.querySelectorAll(`.section > div`);
        sections.forEach(s => {
          s.classList.remove('selected');
        });
      },500);
      
      const currentPlanet = planet.classList[0];

      document.querySelectorAll('.planet').forEach(p => {
        if (p.classList[0] !== planet.classList[0]) {
          //PLANETS NOT CLICKED
          const planetClass = p.classList[0];

          // Reset animation by setting it to 'none' and then re-adding it
          p.style.animation = 'none';
          p.children[0].classList.remove('glow');
          // Force reflow to restart the animation
          void p.offsetWidth; // This line forces a reflow
          p.style.animation = `orbit-out-${planetClass} 2s 1 linear`;

        } else {
          //PLANET THAT WAS CLICKED
          //leftSide.classList.remove('hidden');
          setTimeout(() => {
            const newActiveSection = document.querySelector(`.${currentPlanet}-section`);
            newActiveSection.classList.add('selected');
            leftSide.classList.add('active');


          }, 1000);
        }
      });

      setTimeout(() => {
        leftSide.classList.add('active'); // This will bring the section back
        console.log('Added active class to leftSide');
      }, 1000); // No quotes around the number
    });
});