import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, PlusCircle } from "lucide-react";

const paymentHistory = [
    { date: "June 1, 2024", amount: "$135.20", status: "Paid", invoiceId: "INV-007" },
    { date: "May 1, 2024", amount: "$150.10", status: "Paid", invoiceId: "INV-006" },
    { date: "April 1, 2024", amount: "$142.80", status: "Paid", invoiceId: "INV-005" },
    { date: "March 1, 2024", amount: "$165.50", status: "Paid", invoiceId: "INV-004" },
];

export default function BillingPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-headline mb-6">Billing & Payments</h1>

            <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="history">Payment History</TabsTrigger>
                    <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
                        <CardHeader>
                            <CardTitle>Current Statement</CardTitle>
                            <CardDescription>For the period of June 1 - June 30, 2024</CardDescription>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-muted-foreground">Previous Balance:</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-muted-foreground">Payments Received:</span>
                                    <span className="text-green-600">-$135.20</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-muted-foreground">New Charges:</span>
                                    <span>$145.45</span>
                                </div>
                                <hr />
                                <div className="flex justify-between items-baseline font-bold text-lg">
                                    <span>Amount Due:</span>
                                    <span className="text-primary">$145.45</span>
                                </div>
                            </div>
                            <div className="md:col-span-1 flex flex-col justify-between items-start md:items-end md:border-l md:pl-6">
                                <div>
                                    <p className="text-sm text-muted-foreground">Due Date</p>
                                    <p className="font-bold text-destructive">July 31, 2024</p>
                                </div>
                                <Button className="w-full mt-4 [clip-path:polygon(0.75rem_0,100%_0,100%_100%,0_100%,0_0.75rem)]">Pay My Bill</Button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4"/>
                                Download PDF Statement
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="history">
                     <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
                        <CardHeader>
                            <CardTitle>Payment History</CardTitle>
                            <CardDescription>A record of your past payments.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {paymentHistory.map((payment) => (
                                        <TableRow key={payment.invoiceId}>
                                            <TableCell>{payment.date}</TableCell>
                                            <TableCell>{payment.amount}</TableCell>
                                            <TableCell><Badge variant="secondary">{payment.status}</Badge></TableCell>
                                            <TableCell className="text-right">
                                                <Button variant="ghost" size="sm">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="methods">
                     <Card className="[clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)]">
                        <CardHeader>
                            <CardTitle>Payment Methods</CardTitle>
                            <CardDescription>Manage your saved payment options.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Card className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-4">
                                    <img src="https://placehold.co/40x25.png" alt="Visa" data-ai-hint="visa logo" />
                                    <div>
                                        <p className="font-semibold">Visa ending in 1234</p>
                                        <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">Remove</Button>
                            </Card>
                             <Card className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-4">
                                    <img src="https://placehold.co/40x25.png" alt="Bank" data-ai-hint="bank logo" />
                                    <div>
                                        <p className="font-semibold">Checking account ending in 5678</p>
                                        <p className="text-sm text-muted-foreground">My Bank Inc.</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="sm">Remove</Button>
                            </Card>
                            <Button variant="outline" className="w-full">
                                <PlusCircle className="mr-2 h-4 w-4" /> Add New Payment Method
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
