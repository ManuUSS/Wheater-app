<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&family=Signika+Negative:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Signika Negative', sans-serif;
}

.card.card--glass {
    -webkit-backdrop-filter: blur( 4px );
    backdrop-filter: blur( 4px );
    background: rgba( 255, 255, 255, 0.45 );
    border-radius: 0.9375rem;
    border: none;
    box-shadow: 0 3px 15px 0 rgba(39, 42, 90, 0.37);
}
</style>
