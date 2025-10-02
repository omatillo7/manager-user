<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          Learn Smarter. Grow Faster.
        </h1>
        <p class="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Access high-quality courses, track your progress, and explore endless resources for your education journey.
        </p>
        <div class="mt-8 flex justify-center gap-4">
          <router-link
            to="/app/profile"
            class="bg-white text-blue-700 px-6 py-3 rounded-lg shadow font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </router-link>
          <router-link
            to="/app/courses"
            class="bg-blue-500/40 backdrop-blur px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-blue-500/60 transition"
          >
            Browse Courses
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50 dark:bg-[#0b0e16]">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="bg-white dark:bg-[#191c24] rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold mb-3">Expert Tutors</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Learn from professionals with years of real-world experience.
            </p>
          </div>
          <div class="bg-white dark:bg-[#191c24] rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold mb-3">Flexible Learning</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Study anytime, anywhere with our mobile-friendly platform.
            </p>
          </div>
          <div class="bg-white dark:bg-[#191c24] rounded-xl shadow p-6">
            <h3 class="text-xl font-semibold mb-3">Resources Library</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Get access to a variety of learning resources and guides.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- News / Blog Section -->
    <section class="py-16 bg-white dark:bg-[#111418]">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/random/400x250?education"
              alt="news"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2">
                New AI-Powered Course Released
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Explore our latest AI-driven course designed for beginners and pros.
              </p>
              <router-link
                to="/app/courses"
                class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </router-link>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/random/400x250?coding"
              alt="news"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2">
                Coding Bootcamp 2025 Applications Open
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Our intensive bootcamp program is now open for applications.
              </p>
              <router-link
                to="/app/applications"
                class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Apply Now →
              </router-link>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/random/400x250?students"
              alt="news"
              class="w-full h-48 object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2">
                Student Success Stories
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Hear from our students how our platform changed their careers.
              </p>
              <router-link
                to="/app/resources"
                class="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Discover →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// LandingHome sahifasi
</script>
