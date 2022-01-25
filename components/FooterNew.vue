<template>
  <section class="pb-12 pt-8 px-3 bg-footernew text-primary-light">
    <div class="container">
      <div class="border-b border-secondary-lighter flex items-center justify-between pb-6">
        <a href="javascript:void(0)">
          <img
            src="~/assets/img/logo-grabfood-mono.svg"
            class="w-23"
          >
        </a>

        <div class="text-xs">
          <a href="javascript:void(0)">
            EN

            <font-awesome-icon
              :icon="['fas', 'angle-down']"
              class="ml-1"
            />
          </a>
        </div>
      </div>

      <div class="lg:flex lg:justify-between">
        <div class="flex items-center justify-between my-4 lg:flex-col lg:items-baseline lg:justify-start">
          <p class="font-medium text-base">
            Frequently Searched
          </p>

          <ul>
            <li>
              <a href="javascript:void(0)">Burger King Menu</a>
            </li>

            <li>
              <a href="javascript:void(0)">Chatime Menu</a>
            </li>

            <li>
              <a href="javascript:void(0)">Domino's Pizza Menu</a>
            </li>

            <li>
              <a href="javascript:void(0)">Hokben Menu</a>
            </li>

            <li>
              <a href="javascript:void(0)">JCO Delivery</a>
            </li>
          </ul>

          <div class="lg:hidden">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </div>
        </div>

        <div class="flex items-center justify-between my-4 lg:flex-col lg:items-baseline lg:justify-start">
          <p class="font-medium text-base">
            Popular Cuisines
          </p>

          <ul>
            <li>
              <a href="javascript:void(0)">Chinese Food</a>
            </li>

            <li>
              <a href="javascript:void(0)">Fast Food</a>
            </li>

            <li>
              <a href="javascript:void(0)">Indian Food</a>
            </li>

            <li>
              <a href="javascript:void(0)">Indonesian Food</a>
            </li>

            <li>
              <a href="javascript:void(0)">Italian Food</a>
            </li>
          </ul>

          <div class="lg:hidden">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </div>
        </div>

        <div class="flex items-center justify-between my-4 lg:flex-col lg:items-baseline lg:justify-start">
          <p class="font-medium text-base">
            About Grab
          </p>

          <ul>
            <li>
              <a href="javascript:void(0)">About Grab</a>
            </li>

            <li>
              <a href="javascript:void(0)">About GrabFood</a>
            </li>

            <li>
              <a href="javascript:void(0)">Blog</a>
            </li>
          </ul>

          <div class="lg:hidden">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </div>
        </div>

        <div class="flex items-center justify-between my-4 lg:flex-col lg:items-baseline lg:justify-start">
          <p class="font-medium text-base">
            Support
          </p>

          <ul>
            <li>
              <a href="javascript:void(0)">Help</a>
            </li>

            <li>
              <a href="javascript:void(0)">FAQs</a>
            </li>

            <li>
              <a href="javascript:void(0)">Be a GrabFood Merchant</a>
            </li>

            <li>
              <a href="javascript:void(0)">Drive With Grab</a>
            </li>
          </ul>

          <div class="lg:hidden">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
