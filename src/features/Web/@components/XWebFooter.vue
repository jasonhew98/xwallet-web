<template>
  <footer class="main-footer w-full">
    <div v-if="type == 'default'">
      <div class="container md:pb-4 mx-auto pt-14 px-6">
        <div class="grid md:grid-cols-12 grid-cols-1 md:gap-x-20 md:gap-y-16">
          <div class="xl:col-span-5 md:col-span-6 col-span-12 pb-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 icon icon-box-logo bg-green"></div><span class="tracking-widest">XVAULT</span>
            </div>
            <p class="mt-4">Join our newsletter to receive updates on new features and releases.</p>
            <form class="flex md:flex-row flex-col gap-4 py-2" action="">
              <input type="text" class="md:w-80 w-full newsletter__email" placeholder="johndoe@email.com">
              <div class="button button-full button-secondary text-center tracking-wide">Subscribe</div>
            </form>
          </div>
          <!-- Default -->
          <div class="xl:col-span-2 md:col-span-6 md:pt-0 md:block pt-4 col-span-12 hidden">
            <h5 class="tracking-wide font-semibold">About Us</h5>
            <ul class="list-none mt-6 space-y-2">
              <li>
                <span class="footer__menu-link">
                  About
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Careers
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Blog
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Terms
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Privacy
                </span>
              </li>
            </ul>
          </div>
          <div class="xl:col-span-2 md:col-span-6 md:pt-0 md:block pt-4 col-span-12 hidden">
            <h5 class="tracking-wide font-semibold">Service</h5>
            <ul class="list-none mt-6 space-y-2">
              <li>
                <span class="footer__menu-link">
                  Expense Tracker
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Budget Planner
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Financial Tips
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Saving Strategies
                </span>
              </li>
            </ul>
          </div>
          <div class="xl:col-span-3 md:col-span-6 md:pt-0 md:block pt-4 col-span-12 hidden">
            <h5 class="tracking-wide font-semibold">Support</h5>
            <ul class="list-none mt-6 space-y-2">
              <li>
                <span class="footer__menu-link">
                  24/7 Chat Support
                </span>
              </li>
              <li>
                <span class="footer__menu-link">
                  Support Center
                </span>
              </li>
            </ul>
          </div>
          <!-- Accordion -->
          <div class="accordion">
            <div class="accordion-title" @click="toggleAccordionAbout">
              <h5 class="tracking-wide font-semibold">About Us</h5>
              <i v-if="!accordionAbout" class='bx bx-plus'></i>
              <i v-else class='bx bx-minus'></i>
            </div>
            <div class="accordion-answer" :class="accordionAboutClass">
              <ul class="list-none mt-6 space-y-2">
                <li>
                  <span class="footer__menu-link">
                    About
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Careers
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Blog
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Terms
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Privacy
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title" @click="toggleAccordionService">
              <h5 class="tracking-wide font-semibold">Service</h5>
              <i v-if="!accordionService" class='bx bx-plus'></i>
              <i v-else class='bx bx-minus'></i>
            </div>
            <div class="accordion-answer" :class="accordionServiceClass">
              <ul class="list-none mt-6 space-y-2">
                <li>
                  <span class="footer__menu-link">
                    Expense Tracker
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Budget Planner
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Financial Tips
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Saving Strategies
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-title" @click="toggleAccordionSupport">
              <h5 class="tracking-wide font-semibold">Support</h5>
              <i v-if="!accordionSupport" class='bx bx-plus'></i>
              <i v-else class='bx bx-minus'></i>
            </div>
            <div class="accordion-answer" :class="accordionSupportClass">
              <ul class="list-none mt-6 space-y-2">
                <li>
                  <span class="footer__menu-link">
                    24/7 Chat Support
                  </span>
                </li>
                <li>
                  <span class="footer__menu-link">
                    Support Center
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 border-t border-gray-dark">
        <div class="text-center text-gray-light container mx-auto py-7 px-6 text-sm">
          &copy; {{ currentYear }} <span class="tracking-widest">XVAULT</span>
        </div>
      </div>
    </div>
    <div v-if="type == 'minimalist'">
      <div class="mt-4">
        <div class="text-center text-gray-light container mx-auto py-7 px-6 text-xs">
          &copy; {{ currentYear }} <span class="tracking-widest">XVAULT</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  type: { type: String, required: false, default: "default" },
});

const accordionAbout = ref(false);
const accordionService = ref(false);
const accordionSupport = ref(false);

const toggleAccordionAbout = () => {
  accordionService.value = false;
  accordionSupport.value = false;

  accordionAbout.value = !accordionAbout.value;
}

const accordionAboutClass = computed(() => {
  return accordionAbout.value ? 'grid-rows-[1fr] max-h-64' : 'grid-rows-[0fr] max-h-0';
})

const toggleAccordionService = () => {
  accordionAbout.value = false;
  accordionSupport.value = false;

  accordionService.value = !accordionService.value;
}

const accordionServiceClass = computed(() => {
  return accordionService.value ? 'grid-rows-[1fr] max-h-64' : 'grid-rows-[0fr] max-h-0';
})

const toggleAccordionSupport = () => {
  accordionAbout.value = false;
  accordionService.value = false;

  accordionSupport.value = !accordionSupport.value;
}

const accordionSupportClass = computed(() => {
  return accordionSupport.value ? 'grid-rows-[1fr] max-h-64' : 'grid-rows-[0fr] max-h-0';
})

const currentYear = computed(() => {
  return new Date().getFullYear();
})

</script>

<style lang="scss" scoped>
.footer__menu-link {
  @apply hover:text-green transition-colors duration-200 ease-in-out cursor-pointer;
}

.newsletter__email {
  @apply py-2 px-4 outline-none text-black text-base bg-white;
  border-radius: 0;
}

.accordion {
  @apply md:hidden border-t border-white mt-4 pt-4 col-span-12;
}

.accordion-title {
  @apply flex items-center;
  cursor: pointer;

  i {
    @apply ml-auto;
  }
}

.accordion-answer {
  @apply grid overflow-hidden transition-all duration-500;
}
</style>