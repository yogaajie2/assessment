<template>
  <section class="pb-12 pt-8 text-center bg-primary-light text-white lg:text-left">
    <div class="container">
      <div class="lg:flex lg:justify-between">
        <div>
          <p class="mb-4 font-medium text-base">
            Countries with GrabFood
          </p>

          <div class="mb-8">
            <a href="javascript:void(0)">Indonesia</a> | <a href="javascript:void(0)">Philippines</a> | <a href="javascript:void(0)">Thailand</a> | <a href="javascript:void(0)">Vietnam</a> | <a href="javascript:void(0)">Singapore</a> | <a href="javascript:void(0)">Malaysia</a> | <a href="javascript:void(0)">Myanmar</a>
          </div>
        </div>

        <div class="mb-3 space-x-4">
          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              size="2x"
            />
          </a>

          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              size="2x"
            />
          </a>

          <a href="javascript:void(0)">
            <font-awesome-icon
              :icon="['fab', 'twitter-square']"
              size="2x"
            />
          </a>
        </div>
      </div>

      <div class="lg:flex lg:justify-between">
        <div class="mb-6 lg:mb-0">
          <p class="mb-2 text-base text-secondary-lighter">
            &copy; Grab 2022
          </p>

          <div>
            <a href="javascript:void(0)">Terms of Service</a>
            <span class="mx-1">•</span>
            <a href="javascript:void(0)">Privacy Policy</a>
          </div>
        </div>

        <div class="flex justify-center gap-6">
          <img
            src="~/assets/img/logo-appstore.svg"
            class="h-9 w-28"
          >

          <img
            src="~/assets/img/logo-playstore.svg"
            class="h-9 w-28"
          >
        </div>
      </div>
    </div>
  </section>
</template>
