
import { lateef } from "../ui/fonts";
import { UpcomingEvents, UpcomingEventsSkeleton } from "@/app/ui/dashboard/upcoming-events";
import DuesWarning from "@/app/ui/dashboard/dues-warning";
import LatestNews from "../ui/dashboard/latest-news";
import PublicEvents from "../ui/dashboard/public-events";
import { isAuthenticated } from "../lib/session";
import { Suspense } from "react";

export default async function Home() {
  const authenticated = await isAuthenticated();
  return (
    <>
      
        <div className="flex flex-wrap justify-center w-full">
          <div className="max-w-6xl grow">
            <h2 className={`text-5xl py-5 ${lateef.className}`}>Home</h2>
            {authenticated ?
              <Suspense>
                <DuesWarning />
              </Suspense>
              : <></>
            }
          </div>
        </div> : <></>

      {authenticated ?
        <div className="flex flex-wrap justify-center w-full">
          <div className="max-w-6xl w-full">
            <Suspense fallback={<UpcomingEventsSkeleton />}>
              <UpcomingEvents />
            </Suspense>
          </div>


        </div> : <></>
      }

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
          <div className="bg-gray-200 w-full md:w-[50%] h-78 bg-[url('/pizza-small.jpg')] bg-cover bg-center">
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-wrap sm:flex-nowrap max-w-6xl grow sm:gap-3">

          <div className="w-full sm:w-[50%]">
            <Suspense>
              <LatestNews />
            </Suspense>
          </div>

          <div className="w-full sm:w-[50%]">
            <Suspense>
              <PublicEvents />
            </Suspense>
          </div>
        </div>

        
      </div>

    </>
  );
}
