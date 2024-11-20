import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

const Faq = () => {
    return (
        <div>
            <Navbar />
            <Heading title='Frequently Asked Questions (FAQs)' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />

            <Helmet>
                <title>FAQ - Gadget Heaven</title>
                <meta name="description" content="Frequently Asked Questions about Gadget Heaven and our products." />
            </Helmet>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="faq-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is the return policy for gadgets?</div>
                <div className="collapse-content">
                    <p>We offer a 30-day return policy for all gadgets. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a full refund. Items must be in original condition with all accessories included.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">How long does shipping take?</div>
                <div className="collapse-content">
                    <p>Shipping times vary depending on your location. Typically, orders are processed within 2-3 business days, and delivery takes 5-7 business days. We offer express shipping options at checkout for faster delivery.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">Do you offer warranties on products?</div>
                <div className="collapse-content">
                    <p>Yes, most of our gadgets come with a 1-year manufacturer warranty. You can also purchase an extended warranty during checkout for additional coverage. Please refer to the product details page for warranty information on specific items.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">Can I track my order?</div>
                <div className="collapse-content">
                    <p>Yes, once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or through the carrier&apos;s website. Please allow 24 hours for the tracking information to update.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
                <div className="collapse-content">
                    <p>We accept all major credit cards, PayPal, Apple Pay, and Google Pay. For installment payment options, we partner with Klarna and Afterpay, which allow you to spread your payments over time.</p>
                </div>
            </div>

        </div>
    );
};

export default Faq;