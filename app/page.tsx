import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Play, Search, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-900">American Cancer Society</div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  About Cancer
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Stay Healthy
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Find Support
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Our Research
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Get Involved
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  About Us
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Donate</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Life is precious and deserves cancer-free living
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're here for you every step of the way. From prevention and early detection to treatment and
                survivorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Get Help Now</Button>
                <Button variant="outline" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ban.webp"
                alt="Couple embracing, representing support and hope"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Every Cancer Every Life */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every cancer. Every life.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The American Cancer Society is a nationwide, community-based voluntary health organization dedicated to
              eliminating cancer as a major health problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/a-1.webp"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 mb-3">
                      "The support I received helped me through the most difficult time of my life."
                    </p>
                    <p className="font-semibold text-gray-900">Sarah M.</p>
                    <p className="text-sm text-gray-500">Breast Cancer Survivor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/a-2.webp"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 mb-3">
                      "Early detection saved my life. I'm grateful for the resources available."
                    </p>
                    <p className="font-semibold text-gray-900">Michael R.</p>
                    <p className="text-sm text-gray-500">Prostate Cancer Survivor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/a-3.webp"
                    alt="Profile"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 mb-3">"The research funding gives hope to families like mine."</p>
                    <p className="font-semibold text-gray-900">Jennifer L.</p>
                    <p className="text-sm text-gray-500">Caregiver</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Cancer Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Cancer Information Now</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancer Information and Resources</h3>
                <p className="text-gray-600 mb-6">
                  Get reliable, up-to-date information about cancer types, treatments, and support resources.
                </p>
                <div className="space-y-4">
                  <Input placeholder="Search cancer types..." />
                  <Input placeholder="Enter your location..." />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Find Resources</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Cancer Helpline</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our trained cancer information specialists any time, day or night.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">1-800-227-2345</span>
                  </div>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for You */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services for You</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/s-1.webp"
                  alt="Patient consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive support services for patients and families throughout the cancer journey.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/s-2.webp"
                  alt="Transportation services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transportation</h3>
                <p className="text-gray-600 mb-4">
                  Free rides to and from cancer treatment for those who need transportation assistance.
                </p>
                <Button variant="outline" className="w-full">
                  Get Rides
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/s-3.webp"
                  alt="Lodging assistance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lodging Support</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable, affordable lodging for cancer patients and caregivers during treatment.
                </p>
                <Button variant="outline" className="w-full">
                  Find Lodging
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overall Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Overall Impact of the American Cancer Society</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { rating: "4.2", stars: 4, label: "CANCER", reviews: "1.2K+" },
              { rating: "4.5", stars: 5, label: "RESEARCH", reviews: "890+" },
              { rating: "4.3", stars: 4, label: "SUPPORT", reviews: "2.1K+" },
              { rating: "4.4", stars: 4, label: "ADVOCACY", reviews: "756+" },
              { rating: "4.6", stars: 5, label: "PREVENTION", reviews: "1.5K+" },
              { rating: "4.1", stars: 4, label: "EDUCATION", reviews: "934+" },
            ].map((item, index) => (
              <Card key={index} className="bg-blue-900 text-white text-center p-4">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-2">{item.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < item.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-semibold mb-1">{item.label}</div>
                  <div className="text-xs text-blue-200">{item.reviews} reviews</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Prevention and Screening */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Risk, Prevention, and Screening</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about cancer risk factors, prevention strategies, and screening guidelines to help reduce your
              cancer risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image src="/b-1.webp" alt="Healthy eating" width={400} height={400} className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Healthy Eating</h3>
                <p className="text-sm text-gray-600">Nutrition guidelines for cancer prevention</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <Image src="/b-2.webp" alt="Healthy eating" width={400} height={400} className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Stay Active</h3>
                <p className="text-sm text-gray-600">Physical activity and cancer prevention</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <Image src="/b-3.webp" alt="Healthy eating" width={400} height={400} className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Get Screened</h3>
                <p className="text-sm text-gray-600">Early detection screening guidelines</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative">
                <Image src="/b-4.webp" alt="Healthy eating" width={400} height={400} className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Know Your Risk</h3>
                <p className="text-sm text-gray-600">Understanding cancer risk factors</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supporting Families */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Supporting Families and Caregivers</h2>
              <p className="text-xl text-blue-100 mb-8">
                Cancer affects not just patients, but entire families. We provide resources and support for caregivers
                and loved ones throughout the journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">Find Support Groups</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                >
                  Caregiver Resources
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/fam.webp"
                alt="Family support"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers and Fundraising */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteers and Fundraising</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community of volunteers and supporters making a difference in the fight against cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v/1.webp"
                  alt="Volunteers at event"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Volunteer Opportunities</h3>
                <p className="text-sm text-gray-600 mb-4">Make a difference in your community</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Involved
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v/2.webp"
                  alt="Fundraising event"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Fundraising Events</h3>
                <p className="text-sm text-gray-600 mb-4">Participate in events that save lives</p>
                <Button variant="outline" size="sm" className="w-full">
                  Find Events
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v/3.webp"
                  alt="Team fundraising"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Team Fundraising</h3>
                <p className="text-sm text-gray-600 mb-4">Start a team and raise funds together</p>
                <Button variant="outline" size="sm" className="w-full">
                  Start Team
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/v/4.webp"
                  alt="Corporate partnerships"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Corporate Partners</h3>
                <p className="text-sm text-gray-600 mb-4">Partner with us to fight cancer</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research That Saves Lives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research That Saves Lives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our research program funds groundbreaking studies that lead to better treatments and cures for cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/r/1.webp"
                  alt="Laboratory research"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratory Research</h3>
                <p className="text-gray-600 mb-4">
                  Funding innovative research to understand cancer at the molecular level.
                </p>
                <Button variant="outline" className="w-full">
                  Learn About Research
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/r/2.webp"
                  alt="Clinical trials"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Trials</h3>
                <p className="text-gray-600 mb-4">Supporting clinical trials that test new treatments and therapies.</p>
                <Button variant="outline" className="w-full">
                  Find Trials
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/r/3.webp"
                  alt="Research collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Grants</h3>
                <p className="text-gray-600 mb-4">
                  Providing grants to researchers working on breakthrough cancer treatments.
                </p>
                <Button variant="outline" className="w-full">
                  Grant Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Survivor Journeys */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Survivor Journeys</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear inspiring stories from cancer survivors and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden group cursor-pointer">
                <div className="relative h-32">
                  <Image
                    src={`/v/${item}.webp`}
                    alt={`Survivor story ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-gray-900">Survivor Story {item}</p>
                  <p className="text-xs text-gray-500">Watch their journey</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign Up for American Cancer Society Email</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay informed about the latest cancer research, prevention tips, and ways to get involved.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy and will never share your information.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Cancer</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Cancer Facts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Types of Cancer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Risk Factors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Prevention
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Early Detection
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Treatment & Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Treatment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Side Effects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Support Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Patient Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Caregiver Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Research</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Research Areas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Clinical Trials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Research Grants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Research Impact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Fundraise
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Advocacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Corporate Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-blue-200 mb-4 md:mb-0">
                © 2024 American Cancer Society. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-blue-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-200">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-blue-200">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
