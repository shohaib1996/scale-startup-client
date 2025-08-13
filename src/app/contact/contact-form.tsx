import { Card } from '@/components/ui/card';

const ContactForm = () => {
    return (
        <div className="myContainer overflow-hidden" id="contact">
            <Card className="h-[650px] w-full p-3">
                <iframe
                    src="https://www.bizcoms.ai/form-embed/cuCrcAiveW"
                    className="h-full w-full overflow-hidden"
                ></iframe>
            </Card>
        </div>
    );
};

export default ContactForm;
