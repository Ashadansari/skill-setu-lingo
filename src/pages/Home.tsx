import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Languages, 
  Users, 
  BookOpen, 
  Zap, 
  Globe, 
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  FileText,
  Headphones,
  Video
} from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  const features = [
    {
      icon: Languages,
      title: "22+ Indian Languages",
      description: "Complete support for all official Indian languages with cultural adaptation"
    },
    {
      icon: Zap,
      title: "AI-Powered Translation",
      description: "Advanced machine learning ensures contextual accuracy and domain-specific terminology"
    },
    {
      icon: Users,
      title: "Accessibility Focus",
      description: "Screen readers, speech-based learning, and inclusive design for all learners"
    },
    {
      icon: Globe,
      title: "Scalable Architecture", 
      description: "Handle large volumes of content with seamless integration capabilities"
    }
  ]

  const supportedLanguages = [
    "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Gujarati", "Urdu", "Kannada", 
    "Odia", "Malayalam", "Punjabi", "Assamese", "Maithili", "Sanskrit", "Nepali",
    "Kashmiri", "Konkani", "Sindhi", "Dogri", "Manipuri", "Bodo", "Santhali"
  ]

  const contentTypes = [
    { icon: FileText, title: "Text Content", count: "50K+ Documents" },
    { icon: Headphones, title: "Audio Materials", count: "15K+ Hours" },
    { icon: Video, title: "Video Content", count: "8K+ Videos" }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            NCVET Approved Solution
          </Badge>
          
          <h1 className="text-5xl font-bold gradient-hero bg-clip-text text-transparent leading-tight">
            AI-Powered Multilingual
            <br />
            Content Localization
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Democratizing access to vocational education by automatically translating and culturally adapting 
            training materials into all Indian regional languages with contextual accuracy.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/translate">
            <Button variant="hero" size="lg" className="animate-float-gentle shadow-elegant">
              Start Translation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <Link to="/dashboard">
            <Button variant="outline" size="lg" className="border-2 hover:shadow-card transition-smooth">
              View Dashboard
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contentTypes.map((type, index) => (
          <Card key={index} className="professional-card text-center hover:shadow-elegant transition-spring animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-6 shadow-accent">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{type.title}</h3>
              <p className="text-3xl font-bold text-primary mb-2">{type.count}</p>
              <p className="text-sm text-muted-foreground">Ready for localization</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Advanced AI capabilities designed for the Indian educational ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="professional-card hover:shadow-elegant transition-spring group">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-card group-hover:shadow-elegant transition-smooth">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Supported Languages */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Supported Languages</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive coverage of India's linguistic diversity
          </p>
        </div>

        <Card className="professional-card">
          <CardContent className="p-8">
            <div className="flex flex-wrap gap-3">
              {supportedLanguages.map((language, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer shadow-sm hover:shadow-card"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 gradient-subtle rounded-2xl shadow-card">
        <div className="space-y-8 max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold">Ready to Transform Education?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join the revolution in making vocational training accessible to every learner in India.
          </p>
          <div className="flex gap-6 justify-center">
            <Link to="/translate">
              <Button variant="success" size="xl" className="shadow-elegant hover:shadow-accent animate-pulse-professional">
                Get Started Today
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home