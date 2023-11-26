<template>
  <Layout>
    <div class="bg-content-background">
      <!-- about us -->
      <section id="about" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div class="flex flex-col md:flex-row mx-8">
            <div class="flex flex-col items-center w-2/3 md:w-1/3 my-4 md:my-0 w-auto">
              <img
                class="w-1/2 md:w-auto"
                src="jane.webp"
              />
              <div class="flex flex-col items-center">
                <h2 class="font-medium mt-4 text-xl md:text-2xl">
                  {{ $static.metadata.author }}
                </h2>
                <p class="text-sm md:text-base">
                  Massage in Brighton and Hove
                </p>
              </div>
            </div>
            <div
              class="flex flex-col border-t-1 md:border-t-0 border-l-0 md:border-l-1 w-auto md:w-2/3"
              
            >
              <p
                class="leading-relaxed text-xs md:text-base mx-auto md:mx-12 my-4 md:my-0"
              >
              <h3>How can massage help me?</h3>
              <p>Experience relief from pain and tension from either physical or emotional causes,
                including back, neck and shoulder pain, discomfort from repetitive strain injuries, joint pain and more.
                Each treatment is individual to your requirements whether it's muscular pain and stiffness from sitting in front of a computer, 
                gardening, playing sport or if you need to relax body and mind to help relieve the effects stress and anxiety.</p>

              <h3>Massage and your health</h3>
              <p>I've had experience massaging people with a variety of pain and health conditions including back, neck or shoulder pain, carpal tunnel syndrome (CTS), tennis and golfers elbow, sciatic pain, fibromyalgia, chronic fatigue, headaches and migraines, cancer, HIV, EDS and multiple sclerosis. I believe in working slowly and sensitively, using a listening, intuitive touch, as massage doesn't have to be really painful to be effective. You can expect a reduction of pain and increased movement in up to six regular treatments, often with a significant improvement within three sessions. For chronic health conditions treatments every month or fortnight is beneficial to help manage pain and calm the nervous system.  Selfcare advice and stretches can be given to enable you to help yourself at home. Please contact me to find out how I can help you.</p>

                <h3>Where to find me</h3>
                <p>I work from 2 locations, maps are below. At WellBN I use a treatment room away from the main surgery with a separate entrance.
                  I also work close to 7 dials and St Ann's Wells gardens in a lovely space. Appointments for both locations are available on-line.</p>
                  <p> Both treatment rooms are only accessible via stairs.</p>
                  <h3>Prices</h3>
                <p>For all treatments 60 minute sessions are £60 and 90 minute sessions are £85.</p>
                <h3>Gift vouchers can be brought online</h3>
                <p>Simply select either <a href="https://app.acuityscheduling.com/catalog.php?owner=13402788&action=addCart&id=1608112&clear=1" target="_blank" rel="noopener">60 minute voucher</a> or 
                  <a href="https://app.acuityscheduling.com/catalog.php?owner=13402788&action=addCart&clear=1&id=1608117"  target="_blank" rel="noopener">90 minute voucher</a>.
                  For more info see the <a href="#gift-vouchers">gift voucher section</a></p> 
                
              </p>
              <div class="flex items-center mx-auto flex flex-col md:flex-row " >
                <div class="flex flex-col w-auto md:w-1/2" style="padding: 1rem;">
                  <h2>Western Road</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.315762119968!2d-0.15913658401452807!3d50.82531487952877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875856b255f8bd9%3A0x783b2c1fbe467b41!2sBrighton%20Health%20and%20Wellbeing%20Centre!5e0!3m2!1sen!2suk!4v1600807803045!5m2!1sen!2suk" allowfullscreen="allowfullscreen" aria-hidden="false"/>
                </div>
                <div class="flex flex-col w-auto md:w-1/2" style="padding: 1rem;">
                  <h2>7 Dials</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.9893174226826!2d-0.1525974924803106!3d50.83127158506731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875856e8f920233%3A0x465ed710017006f8!2sOsmond%20Road!5e0!3m2!1sen!2suk!4v1600807958064!5m2!1sen!2suk" allowfullscreen="allowfullscreen" aria-hidden="false"/>
                </div>
                </div>
            </div>
            
          </div>
          
        </div>
        
      </section>

      <!-- treatments -->
      <section id="treatments" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div class="text-center w-full">
            <!-- <h1 class="font-medium text-base md:text-lg mb-4">
              Treatments
            </h1> -->
            <p
              class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 mb-4"
            >
              <h2>What treatment to choose?</h2>
              <p>Deep Tissue / Clinical massage or Thai massage work equally well for many conditions so your choice is personal preference.</p>
              <p>If you're sensitive to massage, experiencing fatigue or chronic pain Myofascial Release can help.</p>
              <p>Massage is also safe and suitable throughout all stages of Pregnancy.</p>
              <p>If you are living with Cancer Oncology massage can have many benefits, including helping relieve the symptoms of cancer or side effects of any treatments you may be receiving. Treating the feet with Reflexology has many of the benefits of body massage and can be combined with other therapies too. Further info on the individual treatments page.</p>
              <p>I use vegan massage wax from songbird for my treatments, these are 100% natural and fully certified by the Vegan Society.</p>
            </p>
          </div>
          <!-- each treatment -->
          <div class="flex-center flex-wrap">
            <div
              class="m-4 md:w-1/3 lg:w-1/4"
              v-for="edge in $page.allTreatments.edges"
              :key="edge.node.id"
            >
              <div style="border: 2px solid #af70af; border-radius: 5px; padding: 1em;"><TreatmentThumb :treatment="edge.node"/></div>
              
            </div>
          </div>
        </div>
      </section>

      <!-- Bookings -->
      <section id="bookings" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <h1><a href="https://app.acuityscheduling.com/schedule.php?owner=13402788"  target="_blank" rel="noopener">Make a booking</a></h1>
          <!-- <iframe src="https://app.acuityscheduling.com/schedule.php?owner=13402788" width="100%" height="500" scrolling="auto" frameborder="1" title="Booking" class="wrapper">
		This option will not work correctly. Unfortunately, your browser does not support inline frames.	</iframe> -->
    <!-- <iframe src="https://app.acuityscheduling.com/schedule.php?owner=13402788" width="100%" height="100%" scrolling="no" frameborder="10" title="Booking">
		This option will not work correctly. Unfortunately, your browser does not support inline frames.	</iframe> -->
          <iframe src="https://app.acuityscheduling.com/schedule.php?owner=13402788" width="100%" height="3600"  title="Booking">
          This option will not work correctly. Unfortunately, your browser does not support inline frames.
          <a href="https://app.acuityscheduling.com/schedule.php?owner=13402788"  target="_blank" rel="noopener">Make a booking</a>
          </iframe>
        </div>
      </section>

      <!-- Gift vouchers -->
      <section id="gift-vouchers" class="flex-center h-full min-h-screen m-auto border-b-4">
        <GiftVoucher/>
      </section>

      <!-- FAQ -->
      <section id="faq" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div>
            <TimeLineDot dot="Where" heading="Where do you work from?"
              content="<p>I work from 2 locations around the Brighton / Hove border area. Both are light, 
                  airy and well ventilated, maps on the main pages of website On Western road I use a calm and peaceful 
                  treament room at WellBN (formally Brighton Health and Wellbeing centre) it's mainly seperated from the main 
                  surgery and therapists use a separate entrance.</p>
                  I also work close to 7 dials and St Anns Wells gardens in a lovely space. Appointments for both locations are available on the on-line booking system."/>

            <TimeLineDot dot="Cancellation" heading="What is your cancellation policy?" content="If you're unable to make an appointment please cancel or contact me so I'm able to offer the space to someone else.
              More than 24hrs it's possible to change either online or contacting me without charge
If it's within 24hrs it's not possible to amend online so contact me by phone or email. There will be a cancellation charge.
24 -12hrs and it's 50% of the full price and less than 12hrs it's the full price.
Thank you for your understanding. "/>

            <TimeLineDot dot="Mobile Massage" heading="Do you do mobile massage?" content="Sorry - No."/>

            <TimeLineDot dot="Accessibility" heading="How accessible are your treatment spaces?"
              content="Sorry there are stairs at both locations, the 7 dials location has less than at WellBN"/>

            <TimeLineDot dot="Parking" heading="Can I park near by?" content="<p>Some of the roads near WellBN running north of Western Rd have Pay by phone parking, try not too close to Brighton, it gets more expensive!
            </p><p>The 7 dials location also has near by Pay by phone parking</p>"/>

            <TimeLineDot dot="Buses" heading="Can I travel by bus?" content="
Many of the buses that run along Western rd stop near WellBN such as 1, 2, 5, 5a, 5b, 46, 49. The nearest bus stop is Norfolk square
At 7 dials it's on the no 7 bus route, nearest stop is Osmond rd."/>

            <TimeLineDot dot="What" heading="What massage is best for me?" content="Deep Tissue / Clinical massage or Thai massage work equally well for many conditions including back pain, so your choice is personal preference. If you are sensitive to massage, experiencing fatique or chronic pain Myofascial Release can help. It's possible to change your mind at the time of treatment for everything except Thai massage as this is on a futon matress.
Treatments of the feet Reflexology and Thai Foot massage have many of the benefits of body massage and can be combined with other therapies. Please contact me or see the treatments page for more details.
"/>

            <TimeLineDot dot="How many" heading="How many treatments will I need?" content="It's very individual and both physical and emotional factors can have an impact also how long you've been in pain. A recent twinge in the neck will usually need less treatments than a long term injury. Generally you can expect a reduction of pain and increased movement in up to six treatments, often with a significant improvement within three sessions, ideally initially weekly. For chronic health conditions treatments every month or fortnight is beneficial to help manage pain and calm the nervous system."/>

            <TimeLineDot dot="Products" Heading="What products do you use for your treatments?"
              content="I use vegan massage wax from <a href=https://www.songbirdnaturals.co.uk/vegan-wax.html  target=_blank rel=noopener>Songbird</a>, these are 100% natural and fully certified by the Vegan Society."/>

            <TimeLineDot dot="Children" heading="Do you treat Children?"
              content="Yes, all under 16's need a parent or carer to be present"/>
            
            <TimeLineDot dot="Consultation" heading="How does the consultation process work?"
              content="A few days before your appointment I send an online confidential consultation form and simple to fill in, to ensure I understand what you require from your massage. If you prefer not to use a google forms I can send a form in word to be emailed back to me or we can do the consultion at the time of the treatment. I find it helpful to have your information before I see you, it gives you more treatment time on the day and I can clarify any details or ask further info at the time of your appointment. "/>

            <TimeLineDot dot="Health Insurance" heading="Can I claim on private healthcare plans?"
              content="This depends on the plan, they often have qualification requirements and both ACMT & ITEC for massage and VCTC for Reflexology meet these requirements. Full list of main qualifications here, just scroll to the botto of the page. I'm fully insured and can provide a receipt will all details required."/>

            <TimeLineDot dot="Payments" heading="Do you take card payments?"
              content="Yes, cash too."/>
            
            <TimeLineDot dot="Masks" heading="Do I need to wear a mask?"
              content="It's not required and remains personal choice. I'm not wearing a mask however will wear one on request"/>

          </div>
        </div>
      </section>

      <!-- projects -->
      <section id="projects" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <div class="text-center w-full">
            <h1 class="font-medium text-base md:text-lg mb-4">
              Treatments
            </h1>
            <p
              class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 mb-4"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <!-- each project -->
          <div class="flex-center flex-wrap">
            <div
              class="m-4 md:w-1/3 lg:w-1/4"
              v-for="edge in $page.allProjects.edges"
              :key="edge.node.id"
            >
              <div class="flex flex-row md:flex-col">
                <div
                  class="flex flex-col justify-start md:justify-center items-start md:items-center w-1/3 md:w-auto"
                >
                  <img
                    class="rounded-lg object-contain"
                    :src="edge.node.image"
                    
                    :alt="edge.node.title"
                  />
                  <div class="flex-center space-x-2 md:space-x-4 m-4">
                    <a
                      :href="edge.node.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github"
                    >
                      <GithubIcon class="icon" />
                    </a>
                    <a
                      :href="edge.node.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="edge.node.title"
                    >
                      <OpenInNewIcon class="icon" />
                    </a>
                  </div>
                </div>
                <div class="ml-4 md:ml-0 w-auto">
                  <h2 class="font-medium text-base md:text-lg">
                    {{ edge.node.title }}
                  </h2>
                  <div
                    class="mx-auto leading-relaxed text-xs md:text-base"
                    v-html="edge.node.introduction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- contact section -->
      <section id="contact" class="flex-center h-full min-h-screen m-auto border-b-4">
        <div class="flex-center flex-col container h-full m-auto">
          <GoogleReview/>
          <GoogleReview2/>
          <div>
            <div class="flex flex-col text-center w-full mb-4">
              <h1 class="font-medium text-base md:text-lg mb-4">
                Get in touch with me
              </h1>
              <p
                class="mx-auto leading-relaxed text-xs md:text-base lg:w-2/3 pb-8"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-xs md:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="text-input bg-gray-50 dark:bg-gray-100"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-xs md:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="text-input bg-gray-50 dark:bg-gray-100"
                    />
                  </div>
                </div>
                <div class="p-2 pb-4 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-xs md:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="text-input h-32 bg-gray-50 dark:bg-gray-100"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="p-2 pb-4 w-full border-b-1">
                  <button class="btn bg-content-highlight">
                    Send
                  </button>
                </div>
                <Social class="mt-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
  allTreatments(sortBy: "weight", order: DESC) {
    edges {
      node {
        weight
        id
        title
        image
        introduction
        content
      }
    }
  }
  allExperiences(sortBy: "from", order: DESC) {
    edges {
      node {
        id
        company
        from
        to
        content
      }
    }
  }
  allProjects(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        image
        introduction
        url
        github
        content
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    author
  }
}
</static-query>

<script>
import GithubIcon from "vue-material-design-icons/Github"
import OpenInNewIcon from "vue-material-design-icons/OpenInNew"
import Social from "~/components/Social.vue"
import TreatmentThumb from "~/components/TreatmentThumb.vue"
import GiftVoucher from "~/components/GiftVoucher.vue"
import TimeLineDot from "~/components/TimeLineDot.vue"
// import TreatmentThumb from "~/components/Test.vue"
// import GoogleReview from "~/components/GoogleReview/GoogleReview.vue"
// let GoogleReview2 = "https://widget.trustmary.com/5qR6J__JS"

export default {
  components: {
    GithubIcon,
    OpenInNewIcon,
    Social,
    TreatmentThumb,
    GiftVoucher,
    TimeLineDot,
    // GoogleReview,
    // GoogleReview2,
  },
}

</script>
