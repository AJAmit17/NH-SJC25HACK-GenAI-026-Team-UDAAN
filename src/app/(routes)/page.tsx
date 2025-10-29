"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Shield, 
  Zap,
  ChevronRight,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Agentic RAG Framework",
    description: "Multi-agent reasoning with real-time regulatory intelligence"
  },
  {
    icon: Shield,
    title: "Unified Knowledge Intelligence",
    description: "Seamlessly integrate RBI, SEBI, and internal policies"
  },
  {
    icon: Zap,
    title: "Autonomous Reasoning",
    description: "Self-improving compliance workflows with explainable AI"
  }
];

const stats = [
  { label: "Pending Reviews", value: "12", trend: "+3" },
  { label: "Risk Alerts", value: "4", trend: "High" },
  { label: "Recent Updates", value: "28", trend: "This week" }
];

export default function Landing() {

  return (
    <div className="relative overflow-y-auto">
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
          // style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>Powered by Agentic AI</span>
            </motion.div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Agentic AI for{" "}
              <span className="gradient-text">Financial Governance</span>
            </h1>

            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Empowering compliance teams with real-time, explainable intelligence.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/workspace">
                <Button size="lg" className="gap-2 text-lg">
                  Ask FinRegent
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="gap-2 text-lg">
                Watch Demo
                <ChevronRight className="h-5 w-5" />
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-border/50 bg-secondary/30 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built for Modern Compliance
            </h2>
            <p className="text-lg text-muted-foreground">
              Next-generation intelligence for financial institutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover-lift h-full border-border/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Real-time Intelligence Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead of regulatory changes
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="glass-card hover-lift">
                  <CardHeader className="pb-3">
                    <CardDescription className="text-sm">{stat.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">{stat.value}</span>
                      <span className="mb-1 text-sm text-muted-foreground">
                        {stat.trend}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/workspace">
              <Button size="lg" variant="outline" className="gap-2">
                Explore Workspace
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-border/50 bg-secondary/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">FinRegent</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Agentic AI for Financial Governance & Compliance
          </p>
        </div>
      </footer>
    </div>
  );
}
