import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Info from "../Info";


import "./Press.css";

const blogs = [
  {
    logo: "/footerpress/RCFA.avif",
    title:
      "Kandi Burruss Wore Christian Siriano To The 'Othello' Opening Night Party",
    date: "March 2025",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title:
      "Justin Theroux and Nicole Brydon Bloom Got Married with Custom Wedding Rings. This Is How They Designed Them (Exclusive).",
    date: "March 2025",
  },
  {
    logo: "/footerpress/Wedding_Forward_480x.avif",
    title:
      "Engagement Ring Trends 2025: From Classic Revivals to Modern Twists",
    date: "March 2025",
  },
  {
    logo: "/footerpress/VOGUE_LOGO_480x.svg",
    title:
      "Justin Theroux and Nicole Brydon Bloom Are Married! Inside Their Laid-Back Beach Wedding in Mexico",
    date: "March 2025",
  },
  {
    logo: "/footerpress/byrdie-logo_daf90b2d-b418-4953-a509-9c80c600d6d9_480x.avif",
    title:
      "Brooches Have Entered a New Era—Here's How You Can Style Them in 2025",
    date: "March 2025",
  },
  {
    logo: "/footerpress/Yahoo_Life_480x.avif",
    title: "The Best Luxury Jewelry For Every Sign From With Clarity",
    date: "March 2025",
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title:
      "JCK Special Report- Lab Grown Diamonds - With Clarity's Timely New Brooch Collection",
    date: "March 2025",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "How to Choose a Coordinated Wedding Wardrobe With Your Partner",
    date: "March 2025",
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "What Is an East-West Engagement Ring? Your Complete Guide",
    date: "March 2025",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title:
      "The Best Lab-Grown Diamond Tennis Bracelets That Add Sparkle And Shine To Your Wrist",
    date: "February 2025",
  },
  {
    logo: "/footerpress/the_vou_480x.avif",
    title: "The Five Wedding Band Styles for Men to Find Your Best Match",
    date: "February 2025",
  },
  {
    logo: "/footerpress/bespokebride_345x.avif",
    title:
      "First Valentine's Day Gifts for Newlyweds: The Ultimate Guide to Romantic & Meaningful Surprises",
    date: "February 2025",
  },
  {
    logo: "/footerpress/instyle_seeklogo_345x.avif",
    title: "Why Celebrities Love Two-Stone Engagement Rings",
    date: "February 2025",
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title:
      "Keltie Knight Takes a Tumble on 2025 Grammys Red Carpet 1 Year After Diamond Ring Debacle",
    date: "February 2025",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Valentine's Day Gifts We ❤",
    date: "February 2025",
  },
  {
    logo: "/footerpress/Vogue_India_345x.avif",
    title: "The perfect gifts for the ones who love the finer details",
    date: "February 2025",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title:
      "See Reporter Keltie Knight Tumble on the 2025 Grammys Red Carpet One Year After Losing Diamond from Wedding Ring",
    date: "February 2025",
  },
  {
    logo: "/footerpress/E_News_345x.avif",
    title:
      "Keltie Knight Recovers Like a Champ After Grammys Red Carpet Tumble",
    date: "February 2025",
  },
  {
    logo: "/footerpress/Yahoo_Life_480x.avif",
    title:
      "Valentine's Day 2025 gift ideas: 24 things I own that any woman would love: Skincare, jewelry, PJs and more",
    date: "February 2025",
  },
  {
    logo: "/footerpress/fashionista_345x.avif",
    title: "Heart-Shaped Jewelry Is Trending Just in Time for Valentine's Day",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/the_hollywood_reporter_480x.avif",
    title:
      "Best Jewelry Gifts Valentine's Day 2025: Rings, Necklaces, Earrings",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/bustle_345x.avif",
    title: "The 7 Engagement Ring Trends You'll Be Seeing Everywhere In 2025",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title: "Zendaya's Engagement Ring Details (Plus Shop Similar Styles!)",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Engagement Ring Trends You're Going to See Everywhere in 2025",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Your Sparkling Guide To Valentine's Day Jewelry Gifts!",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title: "38 Elevated Valentine's Day Gift Ideas",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/medium_480x.avif",
    title: "Spread Love & Give Love: The Ultimate Valentine's Day Gift Guide",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/The_Zoe_report.2_a13fb26e-5fa7-4273-b653-aed297cfd3f6_480x.avif",
    title: "East-West Engagement Rings Are On The Rise, Thanks To Zendaya",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/top_wedding_site_480x.avif",
    title:
      "Winter Wedding Must-Haves: From Sparkling Accessories to Cozy Details",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The 22 Best Bridesmaid Proposal Gifts for Your Bridal Party",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The 40 best Valentine's Day gifts to shop for everyone in 2025",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title:
      "Get the Scoop on Chloë Grace Moretz's Engagement Ring and Shop Similar Styles",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/Parade_480x.avif",
    title: "Brianna LaPaglia on the Golden Globes Red Carpet",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Melissa McCarthy Attends the 2025 Golden Globes",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Brianna LaPaglia Hits Golden Globes 2025 Red Carpet",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/sports_illustrated_seeklogo_345x.avif",
    title:
      "Molly Sims Was the Picture of Elegance in Pink Cape Gown, 18K Yellow Gold Ring at the Golden Globes",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/sports_illustrated_seeklogo_345x.avif",
    title:
      "Brianna LaPaglia Is a Metallic Goddess in a Plunging Corset Strapless Gown at the Golden Globes",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Golden Globes 2025 Red Carpet Photos",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/ok_logo_black_345x.avif",
    title:
      "See what all your favorite celebs are up to celebrating the new year of 2025",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/L_OFFICIEL_idHUSMNWYZ_0_345x.avif",
    title: "The Best Dressed Stars from the 2025 Golden Globe Awards",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title:
      "Inside W Magazine's Best Performances Party: See Photos of Angelina Jolie, Nicole Kidman, & More Partying with Celeb Friends!",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/instyle_seeklogo_345x.avif",
    title: "Demi Moore Made This Divisive Millennial Trend Look So Chic",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/ok_logo_black_345x.avif",
    title: "Angelina Jolie & More Stars Shine At Golden Globes Pre-Party",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The 38 Best Classic Engagement Rings for the Timeless Bride",
    date: "JANUARY 2025",
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title: "The 85 best Cyber Monday clothing sales 2024",
    date: "DECEMBER 2024",
  },
  {
    logo: "/footerpress/the_hollywood_reporter_480x.avif",
    title: "The Best Cyber Monday Deals on Celebrity-Loved Jewelry Brands 2024",
    date: "DECEMBER 2024",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title:
      "The 55 Best Cyber Monday Fashion Deals for Brides and Wedding Guests",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title: "The Best Cyber Monday Deals on Celebrity-Loved Jewelry Brands 2024",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/the_skimm_480x.avif",
    title:
      "Our Comprehensive Cheat Sheet for Black Friday & Cyber Monday Sales",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title:
      "Need gifting inspiration? Here are 17 presents our editors are giving their friends and family",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title:
      "'Matlock' Actress Skye P. Marshall Has Date Night with Husband Edwin Hodge at International Emmy Awards Event",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "20 Sweet Gifts for Your Child's Significant Other",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title:
      "I'ma Shopping Director—These Are the Black Friday Deals I Care About Most",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/RCFA.avif",
    title:
      "VivaLas Vegas! amfAR's Inaugural Gala in Sin City Turns into a Celeb Dance Party",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/The_Zoe_report.2_a13fb26e-5fa7-4273-b653-aed297cfd3f6_480x.avif",
    title: "The Best 2024 Black Friday Fashion Sales",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title: "Best Black Friday Wedding Deals to Score Serious Savings",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/the_PR_net_a16c8d52-4d75-45cb-98d8-f4de0536c6fa_480x.avif",
    title: "The Ultimate Holiday Gift Guide: Elegant Finds for Every Style'",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/CLogo_7c571e09-8b6f-4015-ac23-0a1d66d0282b_480x.avif",
    title: "Holiday Gift Guide 2024: For Him",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "Best early Black Friday deals on diamond rings for 2024",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab-Grown Diamond Earrings To Give Or Receive",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "19 Best Places to Buy Engagement Rings of 2024",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title:
      "101+ early Black Friday 2024 deals worth shopping before Thanksgiving",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/rock_an_roll_480x.avif",
    title: "Why Lab-Grown Diamonds are Shaping the Future of Engagement Rings",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/byrdie-logo_daf90b2d-b418-4953-a509-9c80c600d6d9_480x.avif",
    title: "55 Editor-Approved Christmas Gifts to Shop This Season",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title: "62 Fashionable Gift Ideas, Including Bags, Jewelry, and Coats",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Cyber Monday & Black Friday Engagement Ring Sales to Shop in 2024",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "33 Taylor Swift Inspired Engagement Rings Based on Her Eras",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Your Guide to Cluster Engagement Rings",
    date: "NOVEMBER 2024",
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "The Best Jewelry Gifts To Add Sparkle And Shine To The Occasion",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/Paper_c71ba5a2-88cc-4bdb-8439-3849fbaf6e19_480x.avif",
    title: "Coolest Person in the Room: Amelia Dimol denberg",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "Affordable Engagement Rings: Best Places To Shop In October 2024",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "Best Lab-Grown Diamonds 2024 | Expert Reviewed",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title: "Oct. 4 Diamond Shavings: Your Friday Web Roundup",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/PRESS_LOGO_480x.avif",
    title: "The 53 Best Bridal Party Gifts, Curated by Brides' Editors",
    date: "OCTOBER 2024",
  },
  {
    logo: "/footerpress/wwd_480x.avif",
    title:
      "EXCLUSIVE: Jewelry Label With Clarity Names Marie Audier as First CEO",
    date: "SEPTEMBER 2024",
  },
  {
    logo: "/footerpress/wwd_480x.avif",
    title:
      "Molly Sims Recalls the 'Heavy' Burden of Her $30 Million Diamond-encrusted Swimsuit for Sports Illustrated on 'Watch What Happens Live",
    date: "SEPTEMBER 2024",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Jenna Bush Hager Lost a Stone from Her Engagement Ring",
    date: "SEPTEMBER 2024",
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title:
      "E! News' Host Keltie Knight Breaks Down Her Emmys Red Carpet Beauty Routine",
    date: "SEPTEMBER 2024",
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_480x.avif",
    title: "70 Splurge-y, Luxury Gifts for Women Who (Seem to) Have It All",
    date: "SEPTEMBER 2024",
  },
  {
    logo: "/footerpress/the_PR_net_a16c8d52-4d75-45cb-98d8-f4de0536c6fa_480x.avif",
    title: "Fall Fashion Heroes: Pieces to Embrace the New Season",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/Vesture_Debate_9ef6066a-6bd9-4faa-8255-0d3ccd585fc6_480x.avif",
    title: "The Bouquet Collection From With Clarity",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "The Best Places To Buy Engagement Rings, According To Gem Experts",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "Menswear Midweek Red Carpet Roundup",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab-Grown Diamonds, Picked By A Gem Expert",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Justin Baldoni & Wife Emily at 'It Ends With Us' NYC Premiere",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title:
      "Justin Baldoni and Wife Emily Wearing Coordinating Flower Accessories for Red Carpet Date Night atthe It Ends with Us Premiere",
    date: "AUGUST 2024",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Nothing Is More Timeless Than A BIG Diamond Engagement Ring",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/WeddingVibe-logo-magenta_a5247aea-e7a7-4cd6-aadd-c3c275cb4d24_345x.avif",
    title: "Your Ultimate Guide to Hidden Halos",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/Emmaline_345x.avif",
    title: "Three Stone Engagement Rings for the Modern Bride",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title:
      "Where to buy the bestlab-grown engagement rings and jewelry in 2024",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/Mimoni_345x.webp",
    title:
      "The Symbolism of Flowers in Jewelry: What Your Accessories Say About You",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/PRESS_LOGO_480x.avif",
    title: "The 13 Best Places to Buy Lab Grown Diamonds in 2024",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/Emmaline_345x.avif",
    title:
      "Uncover The Reserve: With Clarity Limited Collection of Engagement Rings and High Jewelry",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/Purewow_345x.svg",
    title: "The 31 Best Jewelry Gifts to Give This Year",
    date: "JULY 2024",
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title: "Most Legit Places To Buy Engagement Rings Online",
    date: "JUNE 2024",
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title:
      "The Only Online Jewelers You Should be Buying Diamonds From, According to the Pros",
    date: "JUNE 2024",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Diamond Essentials That Every Girl Needs In Her Collection",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title:
      "Kate Upton, Chrissy Teigen, Hunter McGrady & Gayle King Celebrate Sports Illustrated Swimsuit Issue & 60th Anniversary",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title:
      "The Best Red Carpet Looks From the 'Sports Illustrated Swimsuit' 2024 Launch Party",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Mother's Day 2024: Your Glamour Guide To Chic Jewelry Gifts",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/CityLifestyle_Darien_New_Canaan_Lifestyle_CT_Black1_1_345x.avif",
    title: "May 2024 Issue",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/Glamour_6a7ffd0a-1e2e-445e-9381-b77c5c8f0e6d_345x.webp",
    title: "Met Gala 2024 Red Carpet Looks featuring With Clarity",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/jck_in_svg_345x.svg",
    title: "Met Gala 2024 Red Carpet: See All The Divine Looks",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_345x.avif",
    title: "Tony Nominee Maleah Joi Moon in With Clarity at The Met Gala",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/12_MiamiLiving_345x.avif",
    title: "Introducing The Reserve: With Clarity's High Jewelry Collection",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/style_Meets_345x.webp",
    title: "Personalized Mother's Gifts She Will Adore",
    date: "MAY 2024",
  },
  {
    logo: "/footerpress/wwd_345x.avif",
    title:
      "Why Younger Shoppers Are Turning to Heritage Jewelry Like Signet Rings and Tennis Bracelets",
    date: "April 2024",
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Sustainable & Chic Brands to Love For Earth Day",
    date: "April 2024",
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "With Clarity's latest collection spotlight: The Reserve",
    date: "April 2024",
  },
  {
    logo: "/footerpress/PRESS_LOGO_345x.avif",
    title: "The Best Engagement Ring Style for Your Partner's Personality",
    date: "April 2024",
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "What to expect from an Engagement Ring Appointment at With Clarity",
    date: "April 2024",
  },
  {
    logo: "/footerpress/12_MiamiLiving_345x.avif",
    title: "Introducing The World of The Reserve",
    date: "April 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 22 Best Mother's Day Gifts",
    date: "April 2024",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title:
      "Vy Le dressed in head to toe With Clarity at The Sympathizer Premiere",
    date: "April 2024",
  },
  {
    logo: "/footerpress/national_jewelry_345x.avif",
    title: "With Clarity Partners With NFL on Wedding Bands",
    date: "April 2024",
  },
  {
    logo: "/footerpress/wwd_345x.avif",
    title:
      "NFL Releases Wedding Bands Collection With Fine JewelryLabel With Clarity",
    date: "April 2024",
  },
  {
    logo: "/footerpress/southernBride_LOGO_345x.svg",
    title: "Vintage Inspired Engagement Rings from With Clarity",
    date: "April 2024",
  },
  {
    logo: "/footerpress/forbes-logo_345x.avif",
    title: "Fine Jewelry Brand, With Clarity, Launches NYC Storefront",
    date: "April 2024",
  },
  {
    logo: "/footerpress/jck_in_svg_345x.svg",
    title: "With Clarity Expands to In-Person Shopping With NYC Boutique",
    date: "April 2024",
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "18 Best Places to Buy Engagement Rings",
    date: "March 2024",
  },
  {
    logo: "/footerpress/Bridal_Guide_345x.avif",
    title: "Sustainable Rings We Love from With Clarity",
    date: "March 2024",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Everything You Need To Know: Home Preview",
    date: "March 2024",
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "Eternity Bands for Every Spring 2024 Trend",
    date: "March 2024",
  },
  {
    logo: "/footerpress/Wedding_Forward_345x.avif",
    title: "Determining Your Engagement Ring Width",
    date: "March 2024",
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "Lab vs. Natural | Find Your Right Pick",
    date: "March 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab Grown Diamonds featuring With Clarity",
    date: "March 2024",
  },
  {
    logo: "/footerpress/harpers-bazaar-vector-logo_345x.avif",
    title: "Red Carpet Looks in With Clarity",
    date: "February 2024",
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Kelly Curran seen in With Clarity at the 2024 SAG Awards",
    date: "February 2024",
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "Our Ten Favorite Sets of Studs from With Clarity",
    date: "February 2024",
  },
  {
    logo: "/footerpress/southernBride_LOGO_345x.svg",
    title:
      "Your Guide to Choosing The Perfect Diamond for Your Engagement Ring",
    date: "February 2024",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Art Deco-Inspired Engagement Rings",
    date: "February 2024",
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title:
      "22 Best Valentine's Day Gifts For Your Partner, Your Galentine — Or Yourself",
    date: "February 2024",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The Best Places to Buy Engagement Rings with Jewelry Expert Tips",
    date: "February 2024",
  },
  {
    logo: "/footerpress/Woman_s_World_345x.avif",
    title: "Valentine's Day Gift Ideas for Everyone in Your Life",
    date: "February 2024",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title:
      "People Exclusive: Keltie Knight debuts new With Clarity Ring at the 2024 Grammys",
    date: "February 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 15 Best Places To Buy Engagement Rings",
    date: "JANUARY 2024",
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "The 2024 Grammy Awards: A Full Recap",
    date: "February 2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Engagement Rings To Match Your Style and Budget",
    date: "January 2024",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Valentine's Day Gift Guide 2024: The Best Travel-Friendly Earrings",
    date: "January 2024",
  },
  {
    logo: "/footerpress/City_lifestyle_480x.svg",
    title: "Jen Birn's 'My Favorite Things'",
    date: "January 2024",
  },
  {
    logo: "/footerpress/wedding_sparrow_2_480x.avif",
    title: "5 Myths About Lab-Grown Diamond Engagement Rings",
    date: "January 2024",
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title:
      "The Top Valentine's Day Engagement Ring and Wedding Band Sales of 2024",
    date: "January 2024",
  },
  {
    logo: "/footerpress/Marie_claire_480x.svg",
    title: "Engagement Rings You Want to Bookmark",
    date: "January 2024",
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title: "From Our Founder: How I Got Here",
    date: "January 2024",
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_480x.avif",
    title:
      "46 Personalized Valentine's Day Gifts: With Clarity Nameplate Necklaces",
    date: "JANUARY 2024",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title:
      "Valentine's Day Gift Guide 2024: The Best Lab-Grown Diamond Bracelets",
    date: "JANUARY 2024",
  },
  {
    logo: "/footerpress/GH_LOGO_WHITE_345x.avif",
    title: "Wedding Anniversary Gifts to Celebrate 25 Years",
    date: "JANUARY2024",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 15 Best Places To Buy Engagement Rings",
    date: "JANUARY 2024",
  },
  {
    logo: "/footerpress/12_MiamiLiving_480x.avif",
    title: "Timeless Jewelry for EveryOccasion",
    date: "DECEMBER 2023",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (2).svg",
    title: "10 Anniversary Rings for Your Milestone Memories",
    date: "DECEMBER 2023",
  },
  {
    logo: "/footerpress/Purewow_345x.svg",
    title: "31 Best Jewelry Gifts for the Holiday Season",
    date: "DECEMBER 2023",
  },
  {
    logo: "/footerpress/trend_hunter_345x.svg",
    title: "Our Blue Topaz Collection",
    date: "DECEMBER 2023",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (3).svg",
    title: "Add a Pop of Color: Vibrant Engagement Rings",
    date: "DECEMBER 2023",
  },
  {
    logo: "/footerpress/green_wedding_shoes_ImgID1_480x.avif",
    title: "Lab Grown Diamonds: Breaking Down the Benefits",
    date: "December 2023",
  },
  {
    logo: "/footerpress/southernBride_LOGO_480x.svg",
    title: "Introducing The Elegance Collection: Embracing Minimalism",
    date: "December 2023",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x.svg",
    title: "All about With Clarity: Who We Are",
    date: "November 2023",
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The Shopping Continues: Extended Cyber Monday Sales",
    date: "November 2023",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "Bachelorette Gift Ideas for the Bride-to-Be",
    date: "November 2023",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Top Engagement Rings Sales for Black Friday and Cyber Monday",
    date: "November 2023",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "Best Places to Buy Diamond Jewelry",
    date: "November 2023",
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (4).svg",
    title: "The Most Unique and Amazing Engagement Rings",
    date: "March 2023",
  },
  {
    logo: "/footerpress/sheFind_LOGO_345x.svg",
    title:
      "With Clarity Has The Largest Selection of Lab Diamonds And Some of Our Engagement Rings and Earrings Made With Them.",
    date: "January 2023",
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "31 Must-Have Oval Engagement Rings",
    date: "January 2023",
  },
  {
    logo: "/footerpress/southernBride_LOGO_480x.svg",
    title: "Current Engagement Ring Trends and Bespoke Designs In 2023",
    date: "January 2023",
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Places To Find Affordable Engagement Rings",
    date: "January 2023",
  },
  {
    logo: "/footerpress/LabGrownCarats_LOGO_345x.svg",
    title:
      "Top selects of our bestselling lab diamond jewelry gifts for under $1000.",
    date: "November 2022",
  },
  {
    logo: "/footerpress/cnn_underscored_logo_345x.avif",
    title:
      "Mentioned as one of the best places to buy engagement rings, especially for our easy to buy preset collection.",
    date: "November 2022",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title:
      "With Clarity is ranked as the #1 Best Overall Place to Buy Engagement Rings Online.",
    date: "October 2022",
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title:
      "View our top rated anniversary, diamond and eternity bands. Ranked as one of the best gifts for a milestone anniversary.",
    date: "June 2022",
  },
  {
    logo: "/footerpress/VOGUE_LOGO_345x.svg",
    title:
      "Our gorgeous rose gold jewelry pieces and most loved styles, highlighted in Vogue.",
    date: "May 2022",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title:
      "Our Poise Basket Peridot Ring made the list of best colored engagement rings.",
    date: "April 2022",
  },
  {
    logo: "/footerpress/BI_new_345x.avif",
    title:
      "With Clarity featured in The Lead's top 50 breakout brands in the fashion, beauty and lifestyle space.",
    date: "March 2022",
  },
  {
    logo: "/footerpress/cnn_underscored_logo_345x.avif",
    title:
      "Planning to propose? Here are 23 expert-approved rings worth buying",
    date: "May 2021",
  },
  {
    logo: "/footerpress/nice_ice-logo_345x.avif",
    title: "With Clarity Diamond Reviews 2021 Discover Spectacular Sparkle",
    date: "March 2021",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title:
      "Meet With Clarity, The Online Jewelry Brand That Let's You Try On Before You Buy",
    date: "March 2021",
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title: "The Rare-Cut Diamond Trend Designers Say Will Rise In 2021",
    date: "Feb 2021",
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Where To Buy An Engagement Ring Online",
    date: "Feb 2021",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "28 Men's Diamond Wedding Bands We Love",
    date: "Feb 2021",
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title:
      "Beautiful Royal Engagement Rings Throughout History, Plus Lookalikes You Can Buy Now",
    date: "Jan 2021",
  },
  {
    logo: "/footerpress/Wedding_Wire_345x.avif",
    title: "27 Minimalist Engagement Rings for Your Understated Other Half",
    date: "Jan 2021",
  },
  {
    logo: "/footerpress/The_Lead_345x.webp",
    title: "The Foremost 50 of 2020",
    date: "Jan 2021",
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title:
      "Demystifying Lab-Grown Diamonds: 2 Experts On The Essential Facts & Common Myths",
    date: "December 2020",
  },
  {
    logo: "/footerpress/Stylecaster_345x.webp",
    title: "5 2021 Jewelry Trends To Invest In, From Pendants To Pearls",
    date: "December 2020",
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "How COVID Revamped the Online Engagement Ring Shopping Experience",
    date: "December 2020",
  },
  {
    logo: "/footerpress/Refinery_29_345x.webp",
    title:
      "8 Engagement Ring Trends That Will Be Big In 2021, According to Experts",
    date: "December 2020",
  },
  {
    logo: "/footerpress/Rolling_Stone_345x.webp",
    title: "The Latest Pandemic Trend: Getting Engaged",
    date: "December 2020",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The Complete Guide to Lab-Grown Diamond Engagement Rings",
    date: "December 2020",
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title:
      "Winter's Top Earrings Trends Have The Approval Of The Industry's Coolest Designers",
    date: "Nov 2020",
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "24 Show-Stopping Flower Engagement Rings",
    date: "Nov 2020",
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "9 Engagement Ring Trends That Are IN For 2021",
    date: "Nov 2020",
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "How to Choose the Right Wedding Band for the Groom",
    date: "June 2020",
  },
  {
    logo: "/footerpress/medium_CP_BTSS_Podcast_cover_345x.avif",
    title: "Sharing the story of working together and building With Clarity.",
    date: "April 2020",
  },
  {
    logo: "/footerpress/Financial-Times-Logo_new_345x.avif",
    title: "With Clarity ranks at #13 fastest growing company in 2020.",
    date: "April 2020",
  },
  {
    logo: "/footerpress/Hustlr_new_345x.avif",
    title:
      "Slisha & Anubh from With Clarity talk about scaling and growing fast.",
    date: "March 2020",
  },
  {
    logo: "/footerpress/Ruffled_new_345x.webp",
    title: "Sharing how Lab Diamond Engagement Rings are the next big thing.",
    date: "December 2019",
  },
  {
    logo: "/footerpress/The_Adult_Man-logo_345x.avif",
    title: "Proposals are hard to mess up if you follow a few guidelines",
    date: "November 2019",
  },
  {
    logo: "/footerpress/Digitail_360-logo_345x.avif",
    title: "With Clarity's unique approach drives massive growth",
    date: "November 2019",
  },
  {
    logo: "/footerpress/CNYB-logo_345x.webp",
    title:
      "With Clarity is ranked as the 3rd fastest growing company in New York on Crain's Fast 50 list.",
    date: "November 2019",
  },
  {
    logo: "/footerpress/Inc._magazine_logo_345x.webp",
    title:
      "These startups came up with unique business models--and they turned out to be wildly lucrative.",
    date: "November 2019",
  },
  {
    logo: "/footerpress/Digiday-logo_345x.webp",
    title:
      "How With Clarity and other brands are 'on a mission to DTC-ify engagement and wedding rings.'",
    date: "November 2019",
  },
  {
    logo: "/footerpress/cosmopolitan-logo_345x.avif",
    title:
      "Our two tips to a great Christmas proposal: Make sure to find time when the two of you can be alone together; and...don't lose the ring.",
    date: "November 2019",
  },
  {
    logo: "/footerpress/AE_345x.avif",
    title: "Our tips on making sure customers are top priority every time.",
    date: "August 2019",
  },
  {
    logo: "/footerpress/CMS-Wire-logo_345x.avif",
    title:
      "Building a brand with strength from the inside out. What we've learned along the way",
    date: "August 2019",
  },
  {
    logo: "/footerpress/Inc._magazine_logo_345x.webp",
    title:
      "We're thrilled that our team made it to #3 on the 10 hottest companies in NYC",
    date: "August 2019",
  },
  {
    logo: "/footerpress/BI_new_2b9200fc-dbf8-4adc-8941-ba0b7df45a7a_345x.avif",
    title:
      "The smartest and most stress-free way to shop for her engagement ring online.",
    date: "August 2019",
  },
  {
    logo: "/footerpress/inc-image_345x.avif",
    title:
      "With Clarity was named #18 on the INC 5000 list of fastest growing companies in the USA.",
    date: "August 2019",
  },
  {
    logo: "/footerpress/forbes_1_345x.webp",
    title: "With Clarity: The Warby Parker Of Engagement Rings",
    date: "July 2019",
  },
  {
    logo: "/footerpress/Yahoo_345x.webp",
    title: "Startup taking the stress out of engagement ring shopping",
    date: "May 2019",
  },
  {
    logo: "/footerpress/createthefuture_345x.avif",
    title: "With Clarity Offers Elegant Custom-Made Engagement Rings",
    date: "May 2019",
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title:
      "How Often Should You Take Your Engagement Ring to the Jeweler for a Tune-Up?",
    date: "May 2019",
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "How to Choose a Timeless Engagement Ring",
    date: "June 2018",
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "9 Engagement Ring Trends That Are So In for 2019",
    date: "June 2018",
  },
  {
    logo: "/footerpress/Medium-Magazine_345x.webp",
    title:
      "Female Disruptors: Slisha Kankariya is a hidden gem in the diamond industry",
    date: "August 2018",
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "From Start to Finish: This Is How a Custom Engagement Ring Is Made",
    date: "September 2018",
  },
  {
    logo: "/footerpress/The-Yes-Girls_2_345x.avif",
    title: "Friday 'Rocks'! Featuring Four Mine",
    date: "March 2018",
  },
  {
    logo: "/footerpress/StarTribune_345x.avif",
    title:
      "With Clarity offers a quick way to try rings at home comfortably before you make your purchase.",
    date: "September 2017",
  },
  {
    logo: "/footerpress/Bravo_345x.avif",
    title:
      "Instead of bothering a jeweler to let you try on every single ring they have on display, you can use an at-home service that mails ring options to you.",
    date: "September 2017",
  },
  {
    logo: "/footerpress/Fox_345x.avif",
    title:
      "Shop with ease for an engagement ring online. Try it at home before you buy.",
    date: "September 2017",
  },
  {
    logo: "/footerpress/Credit_345x.avif",
    title:
      "Every piece is handcrafted with care in their New York City studio, so you can be sure that you're only getting the highest quality.",
    date: "May 2017",
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "12 Engagement rings trends that will be huge this season.",
    date: "July 2016",
  },
  {
    logo: "/footerpress/Tc_345x.png",
    title: "With Clarity is a venture backed company growing rapidly.",
    date: "June 2016",
  },
  {
    logo: "/footerpress/Glamour_345x.avif",
    title:
      "We share advice on how to keep your ring sparkling and new now and forever.",
    date: "June 2016",
  },
  {
    logo: "/footerpress/June_345x.avif",
    title:
      "Our gorgeous engagement ring and wedding bands featured at a local New York wedding.",
    date: "April 2016",
  },
  {
    logo: "/footerpress/Your-Tango_345x.avif",
    title:
      "This box is a great way to get going with engagement ring shopping.",
    date: "February 2016",
  },
  {
    logo: "/footerpress/twp_345x.avif",
    title:
      "Going online gives shoppers more options to choose from and comparison shop.",
    date: "December 2015",
  },
  {
    logo: "/footerpress/Tech-co_345x.avif",
    title:
      "With Clarity is the only online jeweler that provides all of the benefits of in-store shopping, at home.",
    date: "October 2015",
  },
  {
    logo: "/footerpress/Popsugar_345x.webp",
    title:
      "With Clarity shares how to showcase your engagement ring once he's popped question.",
    date: "August 2015",
  },
  {
    logo: "/footerpress/AW_345x.avif",
    title:
      "With Clarity eliminates the uncertainty of shopping online with it's at Home Preview for engagement rings.",
    date: "June 2015",
  },
  {
    logo: "/footerpress/WH_345x.avif",
    title:
      "With Clarity is featured as a top bolg for wedding and engagement ring advice.",
    date: "June 2015",
  },
  {
    logo: "/footerpress/B_345x.webp",
    title:
      "With Clarity offers expertise on the entire engagement ring process from start to finish.",
    date: "May 2015",
  },
  {
    logo: "/footerpress/E_345x.webp",
    title:
      "Ecommerce is the new way to shop and work. With Clarity brings technology to the forefront in every experience.",
    date: "March 2015",
  },
  {
    logo: "/footerpress/BI_new_2b9200fc-dbf8-4adc-8941-ba0b7df45a7a_345x.avif",
    title:
      "With Clarity shares how to save on your diamond when shopping online.",
    date: "February 2015",
  },
  {
    logo: "/footerpress/Time_345x.webp",
    title:
      "With Clarity shares our tips on how to obtain the most value when purchasing a diamond ring.",
    date: "February 2015",
  },
  {
    logo: "/footerpress/WB_345x.avif",
    title:
      "Engagement ring buying tips from former diamond cutter and third-generation jeweler Anubh Shah.",
  },
];

const Press = () => {
  const [open, setOpen] = useState(null);

  const menuItems = [
    "PRESS COVERAGE",
    "FACT SHEET",
    "MEDIA ASSETS",
    "CONTACT US",
  ];
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="fw-bold mb-3">In the news</h2>
            <p className="text-muted fs-5">
              We're getting noticed! Check out what others have to say <br />
              about With Clarity.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="/footerpress/pressMain.webp"
              alt="In the news"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div className="container my-4">
        {/* Desktop View */}
        <div className="d-none d-md-flex justify-content-between border-bottom pb-2">
          {menuItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="text-decoration-none fw-bold text-uppercase"
              style={{ color: "#154360", letterSpacing: "1px" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile View */}
        <div className="d-md-none">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="border p-3"
              onClick={() => setOpen(open === index ? null : index)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span
                  className="fw-bold text-uppercase"
                  style={{ color: "#154360" }}
                >
                  {item}
                </span>
                <span>{open === index ? "▲" : "▼"}</span>
              </div>

              <Collapse in={open === index}>
                <div className="mt-2 text-muted">
                  Content for {item} goes here...
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-12">
              <div className="press-item row align-items-center">
                <div className="col-12 col-md-3 press-logo">
                  <img src={blog.logo} alt={blog.title} className="img-fluid" />
                </div>

                <div className="col-12 col-md-9">
                  <div className="press-title">{blog.title}</div>
                  <div className="press-date">{blog.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Info/>
    </>
  );
};

export default Press;
