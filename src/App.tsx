import React from "react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Eye,
  Ear,
  MessageSquare,
  Brain,
  TestTube,
  Heart,
  User,
  Users,
} from "lucide-react";
import questionnaire from "./questionnaire.json";
interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
}

const App = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">
              Tridosha Research Portal
            </h1>
            <div className="space-x-4">
              <Button variant="ghost" onClick={() => setActiveTab("overview")}>
                Overview
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab("shabda")}>
                Shabda Pariksha
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("questionnaire")}
              >
                Questionnaire
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab("research")}>
                Research
              </Button>
              <Button variant="ghost" onClick={() => setActiveTab("about")}>
                About
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="overview">
            <div className="space-y-8">
              <div className="text-center space-y-4 py-12">
                <h1 className="text-4xl font-bold text-slate-900">
                  Tridosha Research Initiative
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A comprehensive study of Ayurvedic Tridosha analysis enhanced
                  by modern technology
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our research focuses on modernizing Ayurvedic diagnostic
                    methods through technology integration, particularly in
                    analyzing Tridoshas (Vata, Pitta, Kapha) using voice
                    characteristics and other physiological parameters.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <Card className="bg-slate-50">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Brain className="h-5 w-5 mr-2 text-blue-500" />
                          Vata Dosha
                        </CardTitle>
                        <CardDescription>
                          Voice Characteristics: Hoarse and rough
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-slate-50">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <TestTube className="h-5 w-5 mr-2 text-red-500" />
                          Pitta Dosha
                        </CardTitle>
                        <CardDescription>
                          Voice Characteristics: Cracking
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="bg-slate-50">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Heart className="h-5 w-5 mr-2 text-green-500" />
                          Kapha Dosha
                        </CardTitle>
                        <CardDescription>
                          Voice Characteristics: Sweet and heavy
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shabda">
            <Card>
              <CardHeader>
                <CardTitle>Shabda Pariksha Research Outputs</CardTitle>
                <CardDescription>
                  Voice Analysis and AI-Based Diagnostics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Voice Analysis Parameters
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                          <h4 className="font-medium">Frequency Analysis</h4>
                          <p className="text-slate-600">
                            Pitch variations and fundamental frequency patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                          <h4 className="font-medium">
                            Amplitude Characteristics
                          </h4>
                          <p className="text-slate-600">
                            Voice intensity and volume patterns
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                          <h4 className="font-medium">Spectral Features</h4>
                          <p className="text-slate-600">
                            Harmonic content and formant analysis
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questionnaire">
            <Card>
              <CardHeader>
                <CardTitle>Research Questionnaires</CardTitle>
                <CardDescription>
                  Current Active Research Surveys
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    {questionnaire.questionnaire.map(
                      (item: Question, index: number) => (
                        <Card key={index} className="bg-slate-50">
                          <CardHeader>
                            <CardTitle>{item.question}</CardTitle>
                            <CardDescription>
                              <ul className="list-disc ml-6">
                                <li>A: {item.options.A}</li>
                                <li>B: {item.options.B}</li>
                                <li>C: {item.options.C}</li>
                              </ul>
                            </CardDescription>
                          </CardHeader>
                          <CardContent></CardContent>
                        </Card>
                      )
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle>Research Outputs</CardTitle>
                <CardDescription>Key Findings and Publications</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Data Collection
                      </h3>
                      <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                          <span className="font-medium">Voice Samples:</span>{" "}
                          [X] recordings analyzed
                        </li>
                        <li className="bg-white p-4 rounded-lg shadow-sm">
                          <span className="font-medium">Survey Responses:</span>{" "}
                          [Z] participant questionnaires
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">
                        Key Findings
                      </h3>
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Voice-Dosha Correlation</CardTitle>
                            <CardDescription>
                              Statistical analysis of voice parameters and
                              Tridosha composition
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About The Project</CardTitle>
                <CardDescription>
                  Project Details and Team Members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Project Description
                    </h3>
                    <p className="text-slate-600">
                      The Tridosha Research Project is a groundbreaking
                      initiative that combines traditional Ayurvedic knowledge
                      with modern technology. Our primary focus is on developing
                      innovative methods for analyzing and understanding the
                      three doshas - Vata, Pitta, and Kapha - through voice
                      analysis and other digital diagnostic tools.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Research Team
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <User className="h-5 w-5 mr-2" />
                            Principal Investigator
                          </CardTitle>
                          <CardDescription>Dr. Manjunath K. V.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600">
                            Involved in research, data collection, mobile
                            application development, development of AI models,
                            and coordination between Ayurvedic experts and
                            Co-PIs.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Co-Principal Investigators
                          </CardTitle>
                          <CardDescription>Core Members</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-slate-600">
                            <li>
                              Dr. Nataraj K. S. - Involved in research, data
                              collection, extraction of voice characteristics,
                              and AI model development.
                            </li>
                            <li>
                              Dr. Pramod Katti - Ayurvedic expert, researching
                              Charaka Samhita and Ayurveda Samhitas, identifying
                              doshas, and assisting in testing the mobile
                              application with Ayurvedic Practitioners.
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Users className="h-5 w-5 mr-2" />
                            Collaborators
                          </CardTitle>
                          <CardDescription>Supporting Team</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-slate-600">
                            <li>
                              Dr. Chinmayanada A. - Guiding on signal
                              processing, AI modeling, and helping with primary
                              and secondary texts related to Shabda Pariksha.
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-slate-600">
            © 2024 Tridosha Research Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
