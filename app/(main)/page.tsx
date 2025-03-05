
import { WarningBox } from "../ui/shared/warning-box";
import Footer from "../ui/layout/footer";
import { lateef } from "../ui/fonts";
import { Card } from "../ui/shared/card";
import { UpcomingEvents } from "@/app/ui/dashboard/upcoming-events";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center w-full">
        <div className="max-w-6xl grow">
          <h2 className={`text-5xl py-5 ${lateef.className}`}>Home</h2>
          <WarningBox>You have an oustanding invoice of <strong>$400.00</strong>.</WarningBox>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full">
        <div className="max-w-6xl w-full">
          <UpcomingEvents />
        </div>

        <div className="bg-orange-vivid-050 w-full mt-8 justify-center flex">
          <div className="max-w-6xl grow flex flex-wrap">
            <div className="w-full md:w-[50%] flex flex-col justify-center px-5 h-78">
              <h3 className={`text-4xl pb-5 ${lateef.className}`}>About Us</h3>
              <p>
                We are really passionate about pizza! The Association of Home Pizza Chefs brings together a community of pizza chefs who love their own brand.
              </p>
              <p>
                Whether it’s Neapolitan, New York or Chicago Deep Dish, we have a place for you in our community.
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[50%] h-78 bg-[url('/pizza-small.jpg')] bg-cover">
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-wrap sm:flex-nowrap max-w-6xl grow sm:gap-3">

          <div className="w-full sm:w-[50%]">
            <Card title="News">
              <div>
                <div>
                  <h4 className="font-bold text-lg">Italian Style Pizza Bake off</h4>
                  <div>
                    April 23, 2025 | Edmonton
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">American Style Pizza Bake off</h4>
                  <div>
                    April 23, 2025 | Edmonton
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="w-full sm:w-[50%]">
            <Card title="Events">
              <div>
                <div>
                  <h4 className="font-bold text-lg">Italian Style Pizza Bake off</h4>
                  <div>
                    April 23, 2025 | Edmonton
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">American Style Pizza Bake off</h4>
                  <div>
                    April 23, 2025 | Edmonton
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Footer />

      </div>

    </>
  );
}
