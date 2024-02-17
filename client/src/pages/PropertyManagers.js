import React from "react";
import Navbar from "../components/Navbar";
import PropertyManagerForm from "../components/PropertyManagersForm";

export default function WaitList() {
  return (
    <div className="waitlist">
      <Navbar />
      <div className="pageWrapper">
        <div className="left">
          <h3>Join Rentwallex community to revolutionize e rent payment</h3>
          <p>
            Rentwallex is proud to partner with leading property managers and
            landlords to offer our innovative financing solutions to tenants
            nationwide. Join our growing network of satisfied partners today.
          </p>
          <p>
            Why partner with Rentwallex? Reduce late rent payment: Minimize the
            risk of rent defaults and late payments with Rentwallex's automated
            payment system and reminder notifications. Improved Cash Flow: Enjoy
            consistent cash flow with Rentwallex's reliable payment system. Say
            goodbye to unpredictable rent cycles and hello to financial
            stability. Enhanced Tenant Satisfaction: Happy tenants lead to
            higher retention rates. With Rentwallex, you can offer a convenient
            payment solution that prioritizes tenant satisfaction, fostering
            positive relationships and long-term leases. Secure and Transparent
            Transactions: Rest assured, your financial information is safe with
            Rentwallex. We prioritize security and transparency to ensure a
            seamless experience for property managers and landlords.
            --------------------------------------------------------------------------------------------------------
            How Rentwallex Works for Property Managers and Landlords Sign Up:
            Simply sign up, provide some basic information about your property.
            Seamlessly integrate Rentwallex into your existing property
            management systems with minimal setup required. Invite Tenants: Once
            your account is set up, invite your tenants to join Rentwallex. They
            can sign up and start making payments in just a few simple steps.
            Automated Rent Collection: Sit back and relax as Rentwallex
            automates the rent collection process. Payments are deposited
            directly into your account, saving you time and effort. Monitor
            Payments: Keep track of rent payments and account activity through
            the Rentwallex dashboard. Access real-time data to stay informed and
            in control. Dedicated Support: Enjoy personalized support from the
            Rentwallex team, ensuring any questions or concerns are addressed
            promptly and effectively.
          </p>
        </div>
        <div className="right" id="pptRight">
          <h3>The wait list from for property managers goes here</h3>
          <PropertyManagerForm />
        </div>
      </div>
    </div>
  );
}
