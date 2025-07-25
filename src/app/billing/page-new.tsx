import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Phone, Mail, Calendar, Download, ArrowRight, Smartphone, Building, Shield, Calculator, CheckCircle } from "lucide-react";

export default function BillingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Billing & Payment Options</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Choose from a variety of payment methods to make paying your bill simple, secure and convenient.
                    </p>
                </div>
            </section>

            {/* Current Bill Overview */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <Card className="max-w-2xl mx-auto mb-12 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Your Current Bill</CardTitle>
                            <CardDescription>Statement for July 2025</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Previous Balance:</span>
                                        <span>$0.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Current Charges:</span>
                                        <span>$145.50</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Payments Received:</span>
                                        <span className="text-green-600">-$145.50</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Amount Due:</span>
                                        <span className="text-primary">$0.00</span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Due Date</p>
                                        <p className="font-bold text-green-600 text-lg">✓ Paid</p>
                                    </div>
                                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" disabled>
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        Account Current
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Payment Options Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Payment Methods</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                            Multiple convenient ways to pay your Union Core Energy bill
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Pay Online */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CreditCard className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Pay Online</h3>
                            <p className="text-muted-foreground mb-6">
                                Secure online payments with credit card, debit card, or bank account
                            </p>
                            <Button className="w-full">Pay Now (Demo)</Button>
                        </Card>

                        {/* Mobile App */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Mobile App</h3>
                            <p className="text-muted-foreground mb-6">
                                Download our mobile app for quick and easy bill payments on the go
                            </p>
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-white">Get App</Button>
                        </Card>

                        {/* AutoPay */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Calendar className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">AutoPay</h3>
                            <p className="text-muted-foreground mb-6">
                                Set up automatic payments and never worry about missing a due date
                            </p>
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-white">Setup AutoPay</Button>
                        </Card>

                        {/* Phone Payment */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Phone className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Phone Payment</h3>
                            <p className="text-muted-foreground mb-6">
                                Call our automated system for quick phone payments 24/7
                            </p>
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-white">Call (555) 123-4567</Button>
                        </Card>

                        {/* In Person */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Building className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">In Person</h3>
                            <p className="text-muted-foreground mb-6">
                                Visit one of our authorized payment locations near you
                            </p>
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-white">Find Locations</Button>
                        </Card>

                        {/* Mail Payment */}
                        <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:scale-105">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Mail Payment</h3>
                            <p className="text-muted-foreground mb-6">
                                Send your payment by mail to our processing center
                            </p>
                            <Button variant="outline" className="w-full hover:bg-primary hover:text-white">View Address</Button>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Billing Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Billing Features</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                            Manage your account with these convenient billing options
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Paperless Billing */}
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="h-8 w-8 text-green-600" />
                                </div>
                                <CardTitle className="text-center">Paperless Billing</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    Go green and receive your bills electronically
                                </p>
                                <Button variant="outline" className="w-full">
                                    Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Budget Billing */}
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calculator className="h-8 w-8 text-blue-600" />
                                </div>
                                <CardTitle className="text-center">Budget Billing</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    Even out seasonal highs and lows with predictable payments
                                </p>
                                <Button variant="outline" className="w-full">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Bill History */}
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Download className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle className="text-center">Bill History</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    Access and download up to 24 months of billing history
                                </p>
                                <Button variant="outline" className="w-full">
                                    View History <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help with Your Bill?</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Our customer service team is here to assist you with billing questions, payment arrangements, and energy assistance programs.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Button size="lg" className="w-full">
                                Contact Support
                            </Button>
                            <Button variant="outline" size="lg" className="w-full">
                                Financial Assistance
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
